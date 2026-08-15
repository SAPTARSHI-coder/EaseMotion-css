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

const ROOT = __dirname;

const DEMO_PATH = path.join(
    ROOT,
    "demo.html"
);

const CSS_PATH = path.join(
    ROOT,
    "style.css"
);

const MIN_FPS = Number(
    process.env.MIN_FPS || 45
);

const MAX_EXECUTION_MS = Number(
    process.env.MAX_EXECUTION_MS || 15000
);

const MAX_BUNDLE_BYTES = Number(
    process.env.MAX_BUNDLE_BYTES || 100000
);

const BENCHMARK_DURATION_MS = Number(
    process.env.TEST_DURATION_MS || 8000
);

async function collectFPS(page) {
    return page.evaluate(
        async (duration) => {
            const frames = [];

            let previousTime = null;

            const startTime =
                performance.now();

            return new Promise(
                (resolve) => {
                    function frame(
                        timestamp
                    ) {
                        if (
                            previousTime !==
                            null
                        ) {
                            frames.push(
                                timestamp -
                                previousTime
                            );
                        }

                        previousTime =
                            timestamp;

                        if (
                            timestamp -
                                startTime <
                            duration
                        ) {
                            requestAnimationFrame(
                                frame
                            );

                            return;
                        }

                        const frameCount =
                            frames.length;

                        const totalFrameTime =
                            frames.reduce(
                                (
                                    total,
                                    value
                                ) =>
                                    total +
                                    value,
                                0
                            );

                        const averageFrameTime =
                            frameCount > 0
                                ? totalFrameTime /
                                  frameCount
                                : 0;

                        const fps =
                            averageFrameTime >
                            0
                                ? 1000 /
                                  averageFrameTime
                                : 0;

                        resolve({
                            fps: Number(
                                fps.toFixed(
                                    2
                                )
                            ),

                            frameCount,

                            averageFrameTimeMs:
                                Number(
                                    averageFrameTime.toFixed(
                                        2
                                    )
                                )
                        });
                    }

                    requestAnimationFrame(
                        frame
                    );
                }
            );
        },
        duration
    );
}

async function triggerScrollWorkload(page) {
    await page.evaluate(async () => {
        const maxScroll =
            document.documentElement
                .scrollHeight -
            window.innerHeight;

        const steps = 100;

        for (
            let index = 0;
            index <= steps;
            index++
        ) {
            const progress =
                index / steps;

            window.scrollTo(
                0,
                maxScroll * progress
            );

            await new Promise(
                (resolve) =>
                    requestAnimationFrame(
                        resolve
                    )
            );
        }

        for (
            let index = steps;
            index >= 0;
            index--
        ) {
            const progress =
                index / steps;

            window.scrollTo(
                0,
                maxScroll * progress
            );

            await new Promise(
                (resolve) =>
                    requestAnimationFrame(
                        resolve
                    )
            );
        }
    });
}

function getBundleSize() {
    const htmlSize =
        fs.statSync(
            DEMO_PATH
        ).size;

    const cssSize =
        fs.statSync(
            CSS_PATH
        ).size;

    return htmlSize + cssSize;
}

function validateBudgets(metrics) {
    const failures = [];

    if (
        metrics.fps <
        metrics.budgets.minimumFps
    ) {
        failures.push(
            `FPS ${metrics.fps} is below minimum ${metrics.budgets.minimumFps}`
        );
    }

    if (
        metrics.executionMs >
        metrics.budgets.maximumExecutionMs
    ) {
        failures.push(
            `Execution time ${metrics.executionMs}ms exceeds maximum ${metrics.budgets.maximumExecutionMs}ms`
        );
    }

    if (
        metrics.bundleSizeBytes >
        metrics.budgets.maximumBundleBytes
    ) {
        failures.push(
            `Bundle size ${metrics.bundleSizeBytes} bytes exceeds maximum ${metrics.budgets.maximumBundleBytes} bytes`
        );
    }

    return failures;
}

async function runBenchmark() {
    if (!fs.existsSync(DEMO_PATH)) {
        throw new Error(
            "demo.html was not found."
        );
    }

    if (!fs.existsSync(CSS_PATH)) {
        throw new Error(
            "style.css was not found."
        );
    }

    console.log(
        "\n========================================"
    );

    console.log(
        " Scroll Animation FPS Benchmark"
    );

    console.log(
        "========================================\n"
    );

    console.log(
        "Launching Headless Chrome..."
    );

    const browser =
        await puppeteer.launch({
            headless: true,

            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage",
                "--disable-gpu"
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

        const benchmarkStart =
            performance.now();

        await page.goto(
            `file://${DEMO_PATH}`,
            {
                waitUntil: "load"
            }
        );

        const ready =
            await page.evaluate(
                () =>
                    window.benchmarkReady ===
                    true
            );

        if (!ready) {
            throw new Error(
                "Benchmark page did not initialize correctly."
            );
        }

        await page.evaluate(() => {
            window.scrollTo(0, 0);
        });

        await triggerScrollWorkload(
            page
        );

        const fpsMetrics =
            await collectFPS(
                page,
                BENCHMARK_DURATION_MS
            );

        const executionMs =
            Number(
                (
                    performance.now() -
                    benchmarkStart
                ).toFixed(2)
            );

        const bundleSizeBytes =
            getBundleSize();

        const metrics = {
            benchmark:
                "scroll-animation-fps",

            browser:
                "headless-chrome",

            durationMs:
                BENCHMARK_DURATION_MS,

            fps:
                fpsMetrics.fps,

            frameCount:
                fpsMetrics.frameCount,

            averageFrameTimeMs:
                fpsMetrics.averageFrameTimeMs,

            executionMs,

            bundleSizeBytes,

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
            "\nMetrics"
        );

        console.log(
            "----------------------------------------"
        );

        console.log(
            `FPS: ${metrics.fps}`
        );

        console.log(
            `Frames: ${metrics.frameCount}`
        );

        console.log(
            `Average frame time: ${metrics.averageFrameTimeMs} ms`
        );

        console.log(
            `Execution time: ${metrics.executionMs} ms`
        );

        console.log(
            `Bundle size: ${metrics.bundleSizeBytes} bytes`
        );

        console.log(
            "\nPerformance Budgets"
        );

        console.log(
            "----------------------------------------"
        );

        console.log(
            `Minimum FPS: ${MIN_FPS}`
        );

        console.log(
            `Maximum execution time: ${MAX_EXECUTION_MS} ms`
        );

        console.log(
            `Maximum bundle size: ${MAX_BUNDLE_BYTES} bytes`
        );

        const failures =
            validateBudgets(
                metrics
            );

        console.log(
            "\nResult"
        );

        console.log(
            "----------------------------------------"
        );

        if (
            failures.length > 0
        ) {
            console.error(
                "❌ Performance budget failed."
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
            "✅ All performance budgets passed."
        );
    } finally {
        await browser.close();
    }
}

runBenchmark().catch(
    (error) => {
        console.error(
            "\n❌ Benchmark failed:"
        );

        console.error(
            error.message
        );

        process.exitCode = 1;
    }
);