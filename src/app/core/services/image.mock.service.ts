import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Image } from '../../core/models/image';
import { IImageService } from './images.service.interface';

@Injectable({
  providedIn: 'root',
})
export class ImagesService implements IImageService {
  images: Image[] = [
    {
      id: 1,
      name: 'Nature',
      description:
        'Nature, in the broadest sense, is the natural, physical, or material world or universe. Nature can refer to the phenomena of the physical world, and also to life in general. ... Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena',
      imageUrl: 'assets/nature.jpg',
    },
    {
      id: 2,
      name: 'Sunset',
      description:
        "Sunset, also known as sundown, is the daily disappearance of the Sun below the horizon due to Earth's rotation. ... Near the horizon, atmospheric refraction causes sunlight rays to be distorted to such an extent that geometrically the solar disk is already about one diameter below the horizon when a sunset is observed",
      imageUrl: 'assets/sunset.jpg',
    },
  ];
  getImageData(): Observable<Image[]> {
    return of(this.images);
  }
  addImage(image: Image) {
    this.images.push(image);
  }
}
