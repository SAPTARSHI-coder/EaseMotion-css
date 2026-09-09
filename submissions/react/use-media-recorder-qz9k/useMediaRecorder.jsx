import { useCallback, useRef, useState } from 'react';

/**
 * useMediaRecorder
 * Wraps the MediaRecorder API for recording from a MediaStream (mic,
 * webcam, or a combination), collecting chunks internally and exposing a
 * single Blob only once recording actually stops -- callers never handle
 * raw dataavailable events or manage a chunks array themselves.
 */
export function useMediaRecorder(stream, options = {}) {
  const [status, setStatus] = useState('idle');
  const [blobUrl, setBlobUrl] = useState(null);
  const recorderRef = useRef(null);
  const chunksRef = useRef([]);

  const start = useCallback(() => {
    if (!stream) return;

    chunksRef.current = [];
    const recorder = new MediaRecorder(stream, options);

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) chunksRef.current.push(event.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: recorder.mimeType });
      setBlobUrl((previousUrl) => {
        if (previousUrl) URL.revokeObjectURL(previousUrl);
        return URL.createObjectURL(blob);
      });
      setStatus('stopped');
    };

    recorder.start();
    recorderRef.current = recorder;
    setStatus('recording');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stream]);

  const stop = useCallback(() => {
    recorderRef.current?.stop();
  }, []);

  const pause = useCallback(() => {
    if (recorderRef.current?.state === 'recording') {
      recorderRef.current.pause();
      setStatus('paused');
    }
  }, []);

  const resume = useCallback(() => {
    if (recorderRef.current?.state === 'paused') {
      recorderRef.current.resume();
      setStatus('recording');
    }
  }, []);

  return { status, blobUrl, start, stop, pause, resume };
}

export default useMediaRecorder;
