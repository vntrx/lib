export async function getVideoDuration(file: File): Promise<number> {
  return new Promise((resolve) => {
    const videoTypes = ['video/mp4', 'video/x-matroska'];

    if (!videoTypes.includes(file.type)) return resolve(0);

    const video = document.createElement('video');
    video.preload = 'metadata';

    video.onloadedmetadata = () => {
      URL.revokeObjectURL(video.src);

      resolve(video.duration);
    };

    video.src = URL.createObjectURL(file);
  });
}
