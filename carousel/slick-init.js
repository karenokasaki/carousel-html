// main.js
document.addEventListener('DOMContentLoaded', function() {
   $('.product-carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            arrows: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            arrows: true,
          },
        },
      ],
    });
  });
  
   const cardsFrag = document.createDocumentFragment();
   const cards = [{
      image:
        "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/8f5a1ccd-c207-4277-bab2-b1d2d1642864/LSEL6335FE_gallery_1_5000x5000",
      sku: "LSEL6335FE",
      title:
        "6.3 cu. ft. Smart wi-fi Enabled ProBake® Convection InstaView® Dual Fuel Slide-In Range with Air Fry",
      link: "https://www.lg.com/us/cooking-appliances/lg-lsdl6336d-dual-fuel-slide-in-range-with-air-fryer",
      category: "induction",
    },
    {
      image:
        "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/bbeec9c1-a5db-40ce-a7e4-341688122a5a/LSIL6336FE_gallery_1_5000x5000",
      sku: "LSIL6336FE",
      title:
        "6.3 cu. ft. Smart Induction Slide-in Range with InstaView®, ProBake Convection®, Air Fry, and Air Sous Video",
      link: "https://www.lg.com/us/cooking-appliances/lg-lsil6336fe-slide-in-electric-range",
      category: "induction",
    },
    {
      image:
        "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/1fcc00bb-80cd-4b6d-b402-0b7fa4fd3c91/LSIL6334FE_gallery_01_5000x5000",
      sku: "LSIL6334FE",
      title:
        "6.3 cu. ft. Smart Induction Slide-in Range with ProBake Convection® and Air Fry",
      link: "https://www.lg.com/us/cooking-appliances/lg-lsil6334fe-slide-in-induction-range",
      category: "induction",
    },
    {
      image:
        "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/1451c866-cf88-43fe-ab0a-a6a339f46813/CBIH3013BE_gallery_1_5000x5000",
      sku: "CBIH3013BE",
      title: "30” Smart Induction Cooktop with UltraHeat™ 4.3kW Element",
      link: "https://www.lg.com/us/cooking-appliances/lg-cbih3013be",
      category: "induction",
    },
    {
      image:
        "https://media.us.lg.com/transform/7c9118ef-344a-4f9d-8eba-d4765127cbde/md06099576-450_1-jpg",
      sku: "CBH3613E",
      title:
        "5.5 cu.ft. Smart wi-fi Enabled Top Load Washer with TurboWash3D™ Technology",
      link: "https://www.lg.com/us/washers-dryers/lg-wt7900hba-top-load-washer",
      category: "laundry",
    },
    {
      image:
        "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/70702913-af95-484d-8f7e-57618801f134/LCE3010SBE_gallery_1_5000x5000",
      sku: "LCE3010SBE",
      title: "30” Electric Cooktop with UltraHeat™ 3.0kW Element",
      link: "https://www.lg.com/us/cooking-appliances/lg-lce3010sbe-electric-cooktop",
      category: "induction",
    },
    {
      image:
        "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/054294cd-63fa-4376-8d34-3158c20f4b49/LCE3610SBE_gallery_1_5000x5000",
      sku: "LCE3610SBE",
      title: "36” Electric Cooktop with UltraHeat™ 3.0kW Element",
      link: "https://www.lg.com/us/cooking-appliances/lg-lce3610sbe-electric-cooktop",
      category: "induction",
    },
    {
      image:
        "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/e35463a8-b767-421f-9f29-c929a4c2c42a/CBIH3017BE_2024_Product_Image_Cooktop_EnegryStar_Reliability_5000x5000",
      sku: "CBIH3017BE",
      title: "30” Smart Induction Cooktop with UltraHeat™ 5.0kW Element",
      link: "https://www.lg.com/us/cooking-appliances/lg-cbih3017be-electric-cooktop",
      category: "induction",
    },
    {
      image:
        "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/b7a13490-2344-4d42-b3f4-8e69b7d95ae1/CBIH3617BE_2024_Product_Image_Cooktop_EnegryStar_Reliability_5000x5000",
      sku: "CBIH3617BE",
      title: "36” Smart Induction Cooktop with UltraHeat™ 5.0kW Element",
      link: "https://www.lg.com/us/cooking-appliances/lg-cbih3617be-electric-cooktop",
      category: "induction",
    },

    {
      image:
        "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/2e7130c7-165a-4d2c-bd8a-da96ccfca0a8/WM6998HBA_gallerynew_01_5000x5000",
      sku: "WM6998HBA",
      title:
        "Ventless Washer/Dryer Combo LG WashCombo™ All-in-One 5.0 cu. ft. Mega Capacity with Inverter HeatPump™ Technology and Direct Drive Motor",
      link: "https://www.lg.com/us/washers-dryers/lg-wm6998hba",
      category: "laundry",
    },
    {
      image:
        "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/36eb41d6-677a-4755-aa72-b31b0902aa66/WM6998HVA_gallery_1_5000x5000",
      sku: "WM6998HVA",
      title:
        "Ventless Washer/Dryer Combo LG WashCombo™ All-in-One 5.0 cu. ft. Mega Capacity with Inverter HeatPump™ Technology and Direct Drive Motor",
      link: "https://www.lg.co/us/washers-dryers/lg-wm6998hva-all-in-one-washer-dryer",
      category: "laundry",
    },
    {
      image:
        "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/2d2514f9-d08c-4638-a21b-fbbb48cfaa14/DLHC5502B_gallery_01_5000x5000",
      sku: "DLHC5502B",
      title:
        "7.8 cu. ft. Mega Capacity Smart Front Load Dryer with Dual Inverter HeatPump™ Technology and Inverter Direct Drive Motor System",
      link: "https://www.lg.com/us/washers-dryers/lg-dlhc5502b-electric-dryer",
      category: "laundry",
    },
    {
      image:
        "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/321ca840-bbb8-4e56-b0cf-dfc7f81d041e/DLHC5502V_gallery_01_5000x5000",
      sku: "DLHC5502V",
      title:
        "7.8 cu. ft. Mega Capacity Smart Front Load Dryer with Dual Inverter HeatPump™ Technology and Inverter Direct Drive Motor System",
      link: "https://www.lg.com/us/washers-dryers/lg-dlhc5502v-electric-dryer",
      category: "laundry",
    },
    {
      image:
        "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/67d6cbf7-d81d-482a-ba88-1bc9f77fe69d/DLHC5502W_gallery_01_5000x5000",
      sku: "DLHC5502W",
      title:
        "7.8 cu. ft. Mega Capacity Smart Front Load Dryer with Dual Inverter HeatPump™ Technology and Inverter Direct Drive Motor System",
      link: "https://www.lg.com/us/washers-dryers/lg-dlhc5502w-electric-dryer",
      category: "laundry",
    },
    {
      image:
        "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/d6f98d64-6977-499c-8174-9e22bcf7bd9b/WKHC252HWA_gallery_1_5000x5000",
      sku: "WKHC252HWA",
      title:
        "Single Unit LG WashTower™ with Center Control™ 5.0 cu. ft. Front Load Washer and 7.8 cu. ft. Electric Ventless Heat Pump Dryer",
      link: "https://www.lg.com/us/washers-dryers/lg-wkhc252hwa-washtower",
      category: "laundry",
    },
    {
      image:
        "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/07b400de-8cfb-4135-b07f-e6168960ab0f/WKHC252HBA_gallery_1_5000x5000",
      sku: "WKHC252HBA",
      title:
        "Single Unit LG WashTower™ with Center Control™ 5.0 cu. ft. Front Load Washer and 7.8 cu. ft. Electric Ventless Heat Pump Dryer",
      link: "https://www.lg.com/us/washers-dryers/lg-wkhc252hba-washtower",
      category: "laundry",
    },
    {
      image:
        "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/47e6f66c-aa8e-428c-8438-ea875afd70b0/WKHC152HWA_gallery_1_5000x5000",
      sku: "WKHC152HWA",
      title:
        "Compact Single Unit LG WashTower™ with Center Control™ 2.4 cu.ft. Front Load Washer and 4.2 cu.ft. Electric Ventless HeatPump™ Dryer",
      link: "https://www.lg.com/us/washers-dryers/lg-wkhc152hwa-washtower",
      category: "laundry",
    },
    ];
 
   cards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("product-card");
      cardElement.innerHTML = `
        <div class="product">
          <img src="${card.image}" alt="${card.title}" />
          <h3>${card.sku}</h3>
          <h2>${card.title}</h2>
          <div class="cta">
            <a data-ms-event="lgEvent" data-ms-action="default-product" data-ms-label="${card.sku}" href="${card.link}" class="newbtn">
              SHOP NOW
            </a>
          </div>
        </div>
      `;
      cardsFrag.appendChild(cardElement);
   });
  
document.querySelector(".product-carousel").appendChild(cardsFrag)

