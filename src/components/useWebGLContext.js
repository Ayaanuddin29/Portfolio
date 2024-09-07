import { useEffect } from 'react';

const useWebGLContext = (canvasId) => {
  useEffect(() => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
      console.error(`Canvas with id ${canvasId} not found`);
      return;
    }

    const handleContextLost = (event) => {
      event.preventDefault();
      console.warn('WebGL context lost');
      // Handle context loss
    };

    const handleContextRestored = () => {
      console.info('WebGL context restored');
      // Restore context
    };

    canvas.addEventListener('webglcontextlost', handleContextLost, false);
    canvas.addEventListener('webglcontextrestored', handleContextRestored, false);

    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
    };
  }, [canvasId]);
};

export default useWebGLContext;
