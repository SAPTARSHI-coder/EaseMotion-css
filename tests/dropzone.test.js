import { describe, it, expect } from 'vitest';

/**
 * Validates a dropped file against size and type constraints.
 * This logic serves as the standalone validation engine for File Dropzone components.
 * 
 * @param {File} file - The file object to validate
 * @param {Object} options - Validation options { maxSize, accept }
 * @returns {Object} { valid: boolean, error: string|null }
 */
export const validateDropFile = (file, options = {}) => {
  if (!file) {
    return { valid: false, error: 'No file provided.' };
  }

  const { maxSize = 5 * 1024 * 1024, accept = '*' } = options;

  if (file.size > maxSize) {
    return { valid: false, error: `File exceeds ${(maxSize / 1024 / 1024).toFixed(1)}MB limit.` };
  }

  if (accept !== '*') {
    const acceptedTypes = accept.split(',').map(t => t.trim().toLowerCase());
    const fileType = file.type ? file.type.toLowerCase() : '';
    const fileExtension = file.name ? '.' + file.name.split('.').pop().toLowerCase() : '';

    const isAccepted = acceptedTypes.some(type => {
      if (type.startsWith('.')) {
        return fileExtension === type;
      }
      if (type.endsWith('/*')) {
        const baseType = type.split('/')[0];
        return fileType.startsWith(`${baseType}/`);
      }
      return fileType === type;
    });

    if (!isAccepted) {
      return { valid: false, error: 'Invalid file type.' };
    }
  }

  return { valid: true, error: null };
};

describe('File Dropzone Drop File Validation', () => {
  it('should return valid for a file under the maximum size limit', () => {
    const file = new File(['content'], 'test.png', { type: 'image/png' });
    Object.defineProperty(file, 'size', { value: 2 * 1024 * 1024 }); // 2MB

    const result = validateDropFile(file, { maxSize: 5 * 1024 * 1024, accept: '*' });
    expect(result.valid).toBe(true);
    expect(result.error).toBeNull();
  });

  it('should return an error when no file is provided', () => {
    const result = validateDropFile(null);
    expect(result.valid).toBe(false);
    expect(result.error).toBe('No file provided.');
  });

  it('should return an error if the file exceeds the maximum size limit', () => {
    const file = new File(['content'], 'large.mp4', { type: 'video/mp4' });
    Object.defineProperty(file, 'size', { value: 10 * 1024 * 1024 }); // 10MB

    const result = validateDropFile(file, { maxSize: 5 * 1024 * 1024, accept: '*' });
    expect(result.valid).toBe(false);
    expect(result.error).toBe('File exceeds 5.0MB limit.');
  });

  it('should accept a file with a matching MIME type', () => {
    const file = new File(['content'], 'doc.pdf', { type: 'application/pdf' });
    Object.defineProperty(file, 'size', { value: 1024 });

    const result = validateDropFile(file, { maxSize: 5 * 1024 * 1024, accept: 'application/pdf, image/png' });
    expect(result.valid).toBe(true);
    expect(result.error).toBeNull();
  });

  it('should reject a file with a non-matching MIME type', () => {
    const file = new File(['content'], 'image.jpg', { type: 'image/jpeg' });
    Object.defineProperty(file, 'size', { value: 1024 });

    const result = validateDropFile(file, { maxSize: 5 * 1024 * 1024, accept: 'application/pdf, image/png' });
    expect(result.valid).toBe(false);
    expect(result.error).toBe('Invalid file type.');
  });

  it('should accept a file matching a wildcard MIME type', () => {
    const file = new File(['content'], 'photo.jpg', { type: 'image/jpeg' });
    Object.defineProperty(file, 'size', { value: 1024 });

    const result = validateDropFile(file, { maxSize: 5 * 1024 * 1024, accept: 'image/*' });
    expect(result.valid).toBe(true);
  });

  it('should accept a file matching a file extension', () => {
    const file = new File(['content'], 'data.csv', { type: 'text/csv' });
    Object.defineProperty(file, 'size', { value: 1024 });

    const result = validateDropFile(file, { maxSize: 5 * 1024 * 1024, accept: '.csv, .txt' });
    expect(result.valid).toBe(true);
  });
  
  it('should reject a file with an invalid extension', () => {
    const file = new File(['content'], 'script.js', { type: 'application/javascript' });
    Object.defineProperty(file, 'size', { value: 1024 });

    const result = validateDropFile(file, { maxSize: 5 * 1024 * 1024, accept: '.csv, .txt' });
    expect(result.valid).toBe(false);
    expect(result.error).toBe('Invalid file type.');
  });
});
