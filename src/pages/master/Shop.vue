-->
<template>
  <div class="">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id"
          class="divide-y divide-dashed   dark:divide-gold group relative border-dashed border border-gold p-10 dark:hover:border-dotted rounded-lg">
          <div
            class="  aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-80 lg:h-80 ">
            <img :src="product.imageSrc" :alt="product.imageAlt"            
              class="  h-full w-full object-cover object-center lg:h-[90%] lg:w-ful" />
          </div>

          <div class="mt-4 flex justify-between ">
            <div>
              <h3 class="text-xl text-gold mt-4 ">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm  text-gray-500 ">{{ product.color }}</p>
            </div>
            <p class="text-sm font-medium text-gold  mt-4 ">{{ product.price }}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: 'LATERITE',
    href: '#',
    imageSrc: 'https://static.wixstatic.com/media/970512_bfdbc3fc4c9b4898ad4e577faab23050~mv2.jpg/v1/fill/w_202,h_202,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/970512_bfdbc3fc4c9b4898ad4e577faab23050~mv2.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$1,499.00',
    color: 'Black Dial',
  },
  {
    id: 2,
    name: 'TRADITIONAL',
    href: '#',
    imageSrc:'https://static.wixstatic.com/media/970512_8d2638a42de744aaa24c882bc5cc9551~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/970512_8d2638a42de744aaa24c882bc5cc9551~mv2.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$3,335.00',
    color: 'Gold',
  },
  {
    id: 3,
    name: 'LATERITE',
    href: '#',
    imageSrc:'https://static.wixstatic.com/media/970512_6cf3713163ae48939bb7236b2b0b478f~mv2.jpg/v1/fill/w_202,h_202,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/970512_6cf3713163ae48939bb7236b2b0b478f~mv2.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$3,999.00',
    color: 'Black Dial',
  },
  {
    id: 4,
    name: 'TRADITIONAL',
    href: '#',
    imageSrc:'https://static.wixstatic.com/media/970512_21175434005440f092a16a1abe604f26~mv2.jpg/v1/fill/w_202,h_202,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/970512_21175434005440f092a16a1abe604f26~mv2.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$1,280.00',
    color: 'Silver',
  },
  {
    id: 5,
    name: 'OYSTER ENGRAVE',
    href: '#',
    imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVNweJtUY3GW1WsD5ptSRVpuJlVnwzrdISB-NyiWSelp_ohax14j4go14Q0QZJIJx7fo&usqp=CAU',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$22,280.00',
    color: 'Black',
  },
  {
    id: 6,
    name: 'TRADITIONAL',
    href: '#',
    imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkhk9cW8vd8JdMRXR5isG_PKjOgQef_-v-Aw&s',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$549',
    color: 'Black',
  },
  {
    id: 7,
    name: 'BANTEAY',
    href: '#',
    imageSrc:'https://static.wixstatic.com/media/970512_597407e795bf49ceb329586c9a602302~mv2.jpg/v1/fill/w_202,h_202,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/970512_597407e795bf49ceb329586c9a602302~mv2.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$4,850.00',
    color: 'Black',
  },
  {
    id: 8,
    name: 'TRADITIONAL',
    href: '#',
    imageSrc:'https://static.wixstatic.com/media/970512_bd0fa53e8d794e0b91600b4309255a04~mv2.jpg/v1/fill/w_202,h_202,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/970512_bd0fa53e8d794e0b91600b4309255a04~mv2.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$888',
    color: 'Black',
  },
  {
    id: 9,
    name: 'BANTEAY SREI',
    href: '#',
    imageSrc:'https://static.wixstatic.com/media/129f8c_b0f22560af3a4d1aac538ce881de777e~mv2.jpg/v1/fill/w_202,h_202,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/129f8c_b0f22560af3a4d1aac538ce881de777e~mv2.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$3,200.00',
    color: 'Black',
  },
  {
    id: 10,
    name: 'YEAR LIMITED',
    href: '#',
    imageSrc:'https://static.wixstatic.com/media/970512_6cf3713163ae48939bb7236b2b0b478f~mv2.jpg/v1/fill/w_202,h_202,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/970512_6cf3713163ae48939bb7236b2b0b478f~mv2.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$14,950.00',
    color: 'Silver',
  },
  {
    id: 11,
    name: 'TRADITIONAL',
    href: '#',
    imageSrc:'https://static.wixstatic.com/media/970512_8d2638a42de744aaa24c882bc5cc9551~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/970512_8d2638a42de744aaa24c882bc5cc9551~mv2.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$12.888.00',
    color: 'Gold',
  },
  {
    id: 12,
    name: 'TRADITIONAL',
    href: '#',
    imageSrc:'https://business-cambodia.com/cms/assets/e868f352-c2d6-45da-beac-ecc7d384c90c?width=1249&height=1280',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$33,000.00',
    color: 'Gold',
  },
  // More products...
]
</script>