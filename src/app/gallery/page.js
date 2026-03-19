import Footer from "@/components/Footer";

export default function GalleryPage() {
  const images = [
    "2026-03-13 15.24.38.jpg",
    "2026-03-13 15.26.39.jpg",
    "468736856_18077413537582004_8244983304258252165_n.jpg",
    "622224988_17992893488879149_6758278340386891342_n.jpg",
    "623240702_18125911384534693_7967987714229509798_n.jpg",
    "627085404_18377699149090912_2557601467035327277_n.jpg",
    "636766536_18400877689180003_7659442306966175574_n.jpg",
    "639781300_18359910859200869_7288374252894890410_n.jpg",
    "641753021_18359910973200869_3435665573914982767_n.jpg",
    "650143924_18108665173804598_7367686453680703486_n.jpg",
    "IMG_20260314_134011.jpg.jpeg",
    "IMG_20260314_173139.jpg.jpeg",
    "IMG_20260314_192504.jpg.jpeg",
    "SRE_8562 (1).JPG",
    "Vanitha magazine picture  (1).jpg",
    "handstand .jpg",
    "picture of syam  (1).JPG",
    "picture of syam (1).jpeg",
    "running .jpeg",
    "running .jpg",
    "scuba diving .JPG",
    "skating .jpg",
    "skydiving .JPG",
    "skydiving helmet .JPG",
    "syam with his mother .jpg",
    "with skydiving rig.JPG"
  ];

  return (
    <>
      <main className="gallery-page-main" style={{ paddingTop: '10rem' }}>
        <div className="gallery-grid-orderly">
          {images.map((img, i) => (
            <div className="gallery-grid-item" key={i}>
              <div 
                className="gallery-image-wrapper" 
                style={{ 
                  backgroundImage: `url('/images/gallery/${encodeURIComponent(img)}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  aspectRatio: '1 / 1',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              ></div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
