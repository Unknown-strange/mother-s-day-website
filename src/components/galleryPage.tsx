import React from 'react';
import './GalleryPage.css'; // Styles for the gallery page


const galleryImagesData = [
  // Replace these placeholders with your actual image details
  { id: 1, src: '/assets/gallery_images/18.jpg', },
  { id: 3, src: '/assets/gallery_images/8.jpg',  },
  { id: 2, src: '/assets/gallery_images/7.jpg',  },
  { id: 4, src: '/assets/gallery_images/6.jpg',  },
  { id: 5, src: '/assets/gallery_images/9.jpg',  },
  { id: 6, src: '/assets/gallery_images/5.jpg',  },
  { id: 7, src: '/assets/gallery_images/2.jpg',  },
  { id: 8, src: '/assets/gallery_images/4.jpg',  },
  { id: 8, src: '/assets/gallery_images/15.jpg',  },
  { id: 8, src: '/assets/gallery_images/17.jpg',  },
  { id: 8, src: '/assets/gallery_images/14.jpg',  },
  { id: 8, src: '/assets/gallery_images/12.jpg',  },
  { id: 8, src: '/assets/gallery_images/20.jpg',  },
  { id: 8, src: '/assets/gallery_images/16.jpg',  },
  { id: 8, src: '/assets/gallery_images/19.jpg',  },
  { id: 8, src: '/assets/gallery_images/23.jpg',  },
  { id: 8, src: '/assets/gallery_images/25.jpg',  },
  { id: 8, src: '/assets/gallery_images/24.jpg',  },
  { id: 8, src: '/assets/gallery_images/3.jpg',  },
  { id: 8, src: '/assets/gallery_images/13.jpg',  },
  { id: 8, src: '/assets/gallery_images/21.jpg',  },
  { id: 8, src: '/assets/gallery_images/22.jpg',  },
  { id: 8, src: '/assets/gallery_images/10.jpg',  },
  { id: 8, src: '/assets/gallery_images/11.jpg',  },
];

//
// !!! END OF USER UPDATE SECTION !!!
//

const GalleryPage: React.FC = () => {
  const handleImageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    target.classList.add('clicked');
    setTimeout(() => {
      target.classList.remove('clicked');
    }, 500); 
  };

  return (
    <div className="gallery-page-container">
      <h1 className="gallery-title">Our Special Moments</h1>
      <div className="gallery-grid">
        {galleryImagesData.map(image => (
          <div 
            key={image.id} 
            className="gallery-item" // Changed from placeholder to actual item
            onClick={handleImageClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleImageClick(e as any)}
            style={{ backgroundImage: `url(${image.src})` }} // Set background image
          >
          </div>
        ))}
      </div>
      <div className="gallery-audio-player">
        <audio src="/assets/music/mothers_day_song.mp3" controls autoPlay loop>
         
        </audio>
      </div>
    </div>
  );
};

export default GalleryPage;

