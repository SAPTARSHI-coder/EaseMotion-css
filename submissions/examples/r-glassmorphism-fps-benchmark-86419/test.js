const fs = require("fs");
const path = require("path");

let puppeteer;

try {
    puppeteer = require("puppeteer");
} catch (error) {
    console.error(
        "Puppeteer is required to run this benchmark."
    );

    console.error(
        "Install it with: npm install puppeteer"
    );

    process.exit(1);
}

const DEMO_PATH = path.join(
    __dirname,
    "demo.html"
);

const MIN_FPS = Number(
    process.env.MIN_FPS || 45
);

const MAX_EXECUTION_MS = Number(
    process.env.MAX_EXECUTION_MS || 10000
);

const MAX_BUNDLE_BYTES = Number(
    process.env.MAX_BUNDLE_BYTES || 50000
);

const TEST_DURATION_MS = Number(
    process.env.TEST_DURATION_MS || 5000
);

async function measureFPS(page) {
    return page.evaluate(async (duration) => {
        const frameTimes = [];

        let previousTimestamp = null;

        const start =
            performance.now();

        return new Promise((resolve) => {
            function frame(timestamp) {
                if (
                    previousTimestamp !== null
                ) {
                    frameTimes.push(
                        timestamp -
                        previousTimestamp
                    );
                }

                previousTimestamp =
                    timestamp;

                if (
                    timestamp - start <
                    duration
                ) {
                    requestAnimationFrame(
                        frame
                    );

                    return;
                }

                const frameCount =
                    frameTimes.length;

                const averageFrameTime =
                    frameCount > 0
                        ? frameTimes.reduce(
                            (sum, value) =>
                                sum + value,
                            0
                        ) / frameCount
                        : 0;

                const fps =
                    averageFrameTime > 0
                        ? 1000 /
                          averageFrameTime
                        : 0;

                resolve({
                    fps: Number(
                        fps.toFixed(2)
                    ),

                    frameCount,

                    averageFrameTime: Number(
                        averageFrameTime.toFixed(2)
                    )
                });
            }

            requestAnimationFrame(frame);
        });
    }, duration);
}

async function runBenchmark() {
    if (!fs.existsSync(DEMO_PATH)) {
        throw new Error(
            "demo.html was not found."
        );
    }

    const browser =
        await puppeteer.launch({
            headless: true,

            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage"
            ]
        });

    try {
        const page =
            await browser.newPage();

        await page.setViewport({
            width: 1280,
            height: 720,
            deviceScaleFactor: 1
        });

        const startTime =
            performance.now();

        await page.goto(
            `file://${DEMO_PATH}`,
            {
                waitUntil: "load"
            }
        );

        const pageReady =
            await page.evaluate(
                () => window.benchmarkReady
            );

        if (!pageReady) {
            throw new Error(
                "Benchmark page failed to initialize."
            );
        }

        const fpsMetrics =
            await measureFPS(
                page
            );

        const executionTime =
            Number(
                (
                    performance.now() -
                    startTime
                ).toFixed(2)
            );

        const bundleSize =
            fs.statSync(
                DEMO_PATH
            ).size +
            fs.statSync(
                path.join(
                    __dirname,
                    "style.css"
                )
            ).size;

        const result = {
            fps: fpsMetrics.fps,
            frameCount:
                fpsMetrics.frameCount,
            averageFrameTimeMs:
                fpsMetrics.averageFrameTime,
            executionMs:
                executionTime,
            bundleSizeBytes:
                bundleSize,
            budgets: {
                minimumFps:
                    MIN_FPS,
                maximumExecutionMs:
                    MAX_EXECUTION_MS,
                maximumBundleBytes:
                    MAX_BUNDLE_BYTES
            }
        };

        console.log(
            "\n================================"
        );

        console.log(
            " Glassmorphism FPS Benchmark"
        );

        console.log(
            "================================"
        );

        console.log(
            `FPS: ${result.fps}`
        );

        console.log(
            `Frames: ${result.frameCount}`
        );

        console.log(
            `Average frame time: ${result.averageFrameTimeMs} ms`
        );

        console.log(
            `Execution time: ${result.executionMs} ms`
        );

        console.log(
            `Bundle size: ${result.bundleSizeBytes} bytes`
        );

        console.log(
            "\nPerformance Budgets:"
        );

        console.log(
            `Minimum FPS: ${MIN_FPS}`
        );

        console.log(
            `Maximum execution: ${MAX_EXECUTION_MS} ms`
        );

        console.log(
            `Maximum bundle: ${MAX_BUNDLE_BYTES} bytes`
        );

        const failures = [];

        if (result.fps < MIN_FPS) {
            failures.push(
                `FPS ${result.fps} is below ${MIN_FPS}`
            );
        }

        if (
            result.executionMs >
            MAX_EXECUTION_MS
        ) {
            failures.push(
                `Execution time ${result.executionMs} ms exceeds ${MAX_EXECUTION_MS} ms`
            );
        }

        if (
            result.bundleSizeBytes >
            MAX_BUNDLE_BYTES
        ) {
            failures.push(
                `Bundle size ${result.bundleSizeBytes} bytes exceeds ${MAX_BUNDLE_BYTES} bytes`
            );
        }

        if (failures.length > 0) {
            console.error(
                "\n❌ Performance budget failed:"
            );

            failures.forEach(
                (failure) => {
                    console.error(
                        `- ${failure}`
                    );
                }
            );

            process.exitCode = 1;

            return;
        }

        console.log(
            "\n✅ All performance budgets passed."
        );
    } finally {
        await browser.close();
    }
}

runBenchmark().catch((error) => {
    console.error(
        "\n❌ Benchmark execution failed:"
    );

    console.error(error);

    process.exitCode = 1;
});