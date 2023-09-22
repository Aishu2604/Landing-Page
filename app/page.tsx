"use client";
import Image from "next/image";
import Header from "./header";
import {
  AiTwotoneStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
  AiOutlineStar,
  AiOutlineHeart,
} from "react-icons/ai";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import ProductSlider from "@/components/myComponent/carasouls/recommendProductSlider";
import Footer from "@/components/footer";
import useWindowDimensions from "@/hooks/useWindowDimension";
import BreadCrum from "@/components/myComponent/breadcrum";

const cardData = [
  {
    id: 1,
    imageUrl: "/1.webp",
    description: "Premium Bag with Stylish Look",
    actualPrice: "₹21,000",
    mrpPrice: "₹51,000",
    offerPrice: "26% OFF",
    offerPercent: "(inclusive of all taxes)",
    icon: <AiOutlineHeart className="h-6 w-6" />,
  },
  {
    id: 2,
    imageUrl: "/71vJR0TDM7L._UL1500_.jpg",
    description: "Premium Bag with Stylish Look",
    actualPrice: "₹21,000",
    mrpPrice: "₹51,000",
    offerPrice: "26% OFF",
    offerPercent: "(inclusive of all taxes)",
    icon: <AiOutlineHeart className="h-6 w-6" />,
  },
  {
    id: 3,
    imageUrl: "/25280a274d8d46e55a1386e6a0c6aad4.webp",
    description: "Premium Bag with Stylish Look",
    actualPrice: "₹21,000",
    mrpPrice: "₹51,000",
    offerPrice: "26% OFF",
    offerPercent: "(inclusive of all taxes)",
    icon: <AiOutlineHeart className="h-6 w-6" />,
  },
  {
    id: 4,
    imageUrl: "/1240015261.jpg",
    description: "Premium Bag with Stylish Look",
    actualPrice: "₹21,000",
    mrpPrice: "₹51,000",
    offerPrice: "26% OFF",
    offerPercent: "(inclusive of all taxes)",
    icon: <AiOutlineHeart className="h-6 w-6" />,
  },
  {
    id: 5,
    imageUrl: "/1562927504_p_4994860_960561.jpeg",
    description: "Premium Bag with Stylish Look",
    actualPrice: "₹21,000",
    mrpPrice: "₹51,000",
    offerPrice: "26% OFF",
    offerPercent: "(inclusive of all taxes)",
    icon: <AiOutlineHeart className="h-6 w-6" />,
  },
  {
    id: 6,
    imageUrl: "/BA2017112022010530695053.jpeg",
    description: "Premium Bag with Stylish Look",
    actualPrice: "₹21,000",
    mrpPrice: "₹51,000",
    offerPrice: "26% OFF",
    offerPercent: "(inclusive of all taxes)",
    icon: <AiOutlineHeart className="h-6 w-6" />,
  },
  {
    id: 7,
    imageUrl: "/bg7ij_512.jpg",
    description: "Premium Bag with Stylish Look",
    actualPrice: "₹21,000",
    mrpPrice: "₹51,000",
    offerPrice: "26% OFF",
    offerPercent: "(inclusive of all taxes)",
    icon: <AiOutlineHeart className="h-6 w-6" />,
  },
  {
    id: 8,
    imageUrl: "/images (1).jpg",
    description: "Premium Bag with Stylish Look",
    actualPrice: "₹21,000",
    mrpPrice: "₹51,000",
    offerPrice: "26% OFF",
    offerPercent: "(inclusive of all taxes)",
    icon: <AiOutlineHeart className="h-6 w-6" />,
  },
  {
    id: 9,
    imageUrl: "/images (2).jpg",
    description: "Premium Bag with Stylish Look",
    actualPrice: "₹21,000",
    mrpPrice: "₹51,000",
    offerPrice: "26% OFF",
    offerPercent: "(inclusive of all taxes)",
    icon: <AiOutlineHeart className="h-6 w-6" />,
  },
  {
    id: 10,
    imageUrl: "/images.jpg",
    description: "Premium Bag with Stylish Look",
    actualPrice: "₹21,000",
    mrpPrice: "₹51,000",
    offerPrice: "26% OFF",
    offerPercent: "(inclusive of all taxes)",
    icon: <AiOutlineHeart className="h-6 w-6" />,
  },
  {
    id: 11,
    imageUrl: "/IMG_2931-1.jpg",
    description: "Premium Bag with Stylish Look",
    actualPrice: "₹21,000",
    mrpPrice: "₹51,000",
    offerPrice: "26% OFF",
    offerPercent: "(inclusive of all taxes)",
    icon: <AiOutlineHeart className="h-6 w-6" />,
  },
  {
    id: 12,
    imageUrl:
      "/l-29-x-h-22-x-w-12-stylish-pu-leather-ladies-purse-shipplier-original-imaggfz9mmpcbrhm.webp",
    description: "Premium Bag with Stylish Look",
    actualPrice: "₹21,000",
    mrpPrice: "₹51,000",
    offerPrice: "26% OFF",
    offerPercent: "(inclusive of all taxes)",
    icon: <AiOutlineHeart className="h-6 w-6" />,
  },
  {
    id: 13,
    imageUrl: "/ladies-leather-fancy-bag.jpg",
    description: "Premium Bag with Stylish Look",
    actualPrice: "₹21,000",
    mrpPrice: "₹51,000",
    offerPrice: "26% OFF",
    offerPercent: "(inclusive of all taxes)",
    icon: <AiOutlineHeart className="h-6 w-6" />,
  },
  {
    id: 14,
    imageUrl:
      "/stylish-handbag-ladies-purse-for-girls-women-106-regular-size-original-imagzs7yvkm9gmwf.webp",
    description: "Premium Bag with Stylish Look",
    actualPrice: "₹21,000",
    mrpPrice: "₹51,000",
    offerPrice: "26% OFF",
    offerPercent: "(inclusive of all taxes)",
    icon: <AiOutlineHeart className="h-6 w-6" />,
  },
];

export default function ProductDetailing() {
  const [recommend, setRecommend]: any = useState(cardData);
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <Header />
      <BreadCrum
        data={[
          { name: "Purse", link: "#" },
          { name: "Premium Purse", link: "#" },
        ]}
      />
      <div className="lg:grid hidden grid-cols-2 justify-items-center pr-[50px] pt-[10px]">
        <div className="justify-items-center ml-10">
          <div className="flex flex-wrap">
            <Image
              className="p-1 h-428"
              src="/istockphoto-1133140907-612x612.jpg"
              alt="Product Image"
              width={330}
              height={428}
            />
            <Image
              className="p-1 h-428"
              src="/u4wsr_512.webp"
              alt="Product Image1"
              width={330}
              height={428}
            />
            <Image
              className="p-1 h-428"
              src="/artboard-4-500x500.webp"
              alt="Product Image1"
              width={330}
              height={428}
            />
            <Image
              className="p-1 h-428"
              src="/download.jpg"
              alt="Product Image"
              width={330}
              height={428}
            />
          </div>
        </div>
        <div className=" ">
          <div>
            <h1 className="text-[25px]">
              <b>Women Premium Purse for Classy Look</b>
            </h1>
            <span className="text-[15px] flex text-[#9C9C9C] ">
              <AiTwotoneStar className="text-[#FF6A02] h-4 w-4 mt-0.5 mr-1" />{" "}
              4.3 | 2.5k Ratings
            </span>
            <p>_______________</p>
          </div>
          <div className="flex">
            <h1 className="text-[#FF6A02] mr-2 text-[20px]">
              <b>₹99,999/-</b>
            </h1>
            <h1 className="text-[#3C3C3C] mt-0.5">
              {" "}
              MRP <span className="line-through">₹1,27,799</span>
            </h1>
            <h1 className="text-[#FF6A02] ml-2  mt-0.5">(61% Off)</h1>
          </div>
          <p className="text-sm text-[#606060] ">(Inclusive Of All Taxes)</p>
          <Separator className="my-4" />
          <h1 className="my-4  text-[#7C7C7C] font-medium">ALL SHADES (3)</h1>
          <div className="flex flex-wrap " style={{ marginLeft: "-7px" }}>
            <div className="ml-1 mr-1 mt-2 space-between h-10 w-10 bg-black rounded-[50%]"></div>
            <div className="ml-1 mr-1 mt-2 space-between h-10 w-10 bg-red-800 rounded-[50%]"></div>
            <div className="ml-1 mr-1 mt-2 space-between h-10 w-10 bg-lime-800 rounded-[50%]"></div>
          </div>
          {/* <Separator className="mb-4" /> */}

          <div className="mt-10  flex ">
            <Button
              variant="outline"
              className="bg-[#EFEFEF] w-[48px] h-[48px]"
            >
              <AiOutlineMinus />
            </Button>
            <p className="mx-5 mt-3">
              <b>2</b>
            </p>
            <Button
              variant="outline"
              className="bg-[#EFEFEF] w-[48px] h-[48px]"
            >
              <AiOutlinePlus />
            </Button>
            <Button className="ml-14 w-[260px] h-[48px] text-[16px]" size="lg">
              Add To Cart{" "}
              <AiOutlineShoppingCart className="w-[20px] h-[15px] ml-2" />
            </Button>
          </div>
          <div className="mt-10">
            <p>
              <b>ESTIMATE DELIVERY</b>
            </p>
            <div className="mt-2 flex w-[369px]  max-w-sm items-center ">
              <Input
                type="text"
                className="rounded-none  h-[48px]"
                placeholder="Enter Pin Code"
              />
              <Button
                type="submit"
                variant="secondary"
                className="text-[#FF6A02] bg-[#F5F5F5]  h-[48px] font-medium"
              >
                Check
              </Button>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-[#484848]">
            <p className="text-[#7C7C7C] font-medium">DESCRIPTION</p>
            <p className="my-4 text-sm">
              {" "}
              <span className="font-medium">Product Code:</span>{" "}
              <b className="text-orange-400"> BR5016R13</b>
            </p>
            <p className="text-sm">
              Aishu-Baba is a feel-good fashion brand for the youth, that
              redefines the concept of luxury through fashion accessories that
              are premium in quality, yet affordable in price. We believe that
              luxury is not about the price tag, but it is about the special
              experience that our collection delivers. Each our creation is
              luxuriously crafted in India.
            </p>
            <ul className="my-8 list-disc text-sm mx-5">
              <li className="my-1">
                Length - 11 ,Width - 3.75 ,Height - 8 Inches
              </li>
              <li className="my-1">Outer Material - PU</li>
              <li className="my-1">Inner Material - Synthethic</li>
              <li className="my-1">Main Compartment - 1.</li>
              <li className="my-1">Inner Pocket - 1</li>
              <li className="my-1">Outer Pocket - 0</li>
            </ul>
          </div>
          <Separator className="my-8" />
          <div className="grid grid-cols-3">
            <Image
              className="h-[63px]"
              src="/cash-on-delivery-services-500x500.webp"
              alt="Service"
              width={229}
              height={63}
            />
            <Image
              className="h-[63px]"
              src="/innovationmobility-transportaxlehire-no-touch-delivery-coronavirus.png"
              alt="Service"
              width={229}
              height={63}
            />
            <Image
              className="h-[63px]"
              src="/360_F_473026422_k3XjtqTh0Br3Iw8IfhlB9c72n9dqi9n5.jpg"
              alt="Service"
              width={229}
              height={63}
            />
          </div>
          <Separator className="my-8" />
          <div className="text-[#7C7C7C]">
            <p className="my-3 font-medium">PRODUCT REVIEWS</p>
            <p>
              <span>4.3</span>{" "}
              <span className="text-orange-400 font-medium">(10 Review)</span>
            </p>
            <p className="flex">
              <span className="text-orange-400">
                <AiTwotoneStar className="w-[19px] h-[18px] mr-1" />
              </span>
              <span className="text-orange-400 w-[19px] h-[18px] mx-1">
                <AiTwotoneStar className="w-[19px] h-[18px] mx-1" />
              </span>
              <span className="text-orange-400 w-[19px] h-[18px] mx-1">
                <AiTwotoneStar className="w-[19px] h-[18px] mx-1" />
              </span>
              <span className="text-orange-400 w-[19px] h-[18px] mx-1">
                <AiTwotoneStar className="w-[19px] h-[18px] mx-1" />
              </span>
              <span>
                <AiOutlineStar className="w-[19px] h-[18px] mx-2" />
              </span>
            </p>
            <div className="flex mt-6 text-[#3C3C3C]">
              <p className=" mr-2">5 Star</p>
              <Progress className="w-[60%] mt-2" value={89} />
              <p className=" ml-2">89%</p>
            </div>
            <div className="flex mt-2 text-[#3C3C3C]">
              <p className=" mr-2">4 Star</p>
              <Progress className="w-[60%] mt-2" value={69} />
              <p className=" ml-2">69%</p>
            </div>
            <div className="flex mt-2 text-[#3C3C3C]">
              <p className=" mr-2">3 Star</p>
              <Progress className="w-[60%] mt-2" value={49} />
              <p className=" ml-2">49%</p>
            </div>
            <div className="flex mt-2 text-[#3C3C3C]">
              <p className=" mr-2">2 Star</p>
              <Progress className="w-[60%] mt-2" value={29} />
              <p className=" ml-2">29%</p>
            </div>
            <div className="flex mt-2 text-[#3C3C3C]">
              <p className=" mr-2">1 Star</p>
              <Progress className="w-[60%] mt-2" value={9} />
              <p className=" ml-2">9%</p>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-[#7C7C7C] ">
            <p className="mb-5 font-medium">CUSTOMER REVIEWS</p>
            <div>
              <p>
                <span className="text-black">
                  <b>DIVYA SINHA </b>{" "}
                </span>
                <span className="text-sm">| 2 Years Ago</span>
              </p>
              <p className="flex">
                <span className="text-orange-400">
                  <AiTwotoneStar className="w-[19px] h-[18px] mr-1" />
                </span>
                <span className="text-orange-400 w-[19px] h-[18px] mx-1">
                  <AiTwotoneStar className="w-[19px] h-[18px] mx-1" />
                </span>
                <span className="text-orange-400 w-[19px] h-[18px] mx-1">
                  <AiTwotoneStar className="w-[19px] h-[18px] mx-1" />
                </span>
                <span className="text-orange-400 w-[19px] h-[18px] mx-1">
                  <AiTwotoneStar className="w-[19px] h-[18px] mx-1" />
                </span>
                <span>
                  <AiOutlineStar className="w-[19px] h-[18px] mx-2" />
                </span>
              </p>
              <p className="my-4 text-sm">
                I absolutely adore my new branded women's purse! Its elegant
                design and impeccable craftsmanship make it a true fashion
                statement. The spacious interior and well-organized compartments
                are a practical dream. This purse not only complements my style
                but also adds a touch of luxury to every outfit. Highly
                recommended!
              </p>
            </div>
            <div>
              <p>
                <span className="text-black">
                  <b>GUNGUN NIGAM </b>{" "}
                </span>
                <span className="text-sm">| 2 Years Ago</span>
              </p>
              <p className="flex">
                <span className="text-orange-400">
                  <AiTwotoneStar className="w-[19px] h-[18px] mr-1" />
                </span>
                <span className="text-orange-400 w-[19px] h-[18px] mx-1">
                  <AiTwotoneStar className="w-[19px] h-[18px] mx-1" />
                </span>
                <span className="text-orange-400 w-[19px] h-[18px] mx-1">
                  <AiTwotoneStar className="w-[19px] h-[18px] mx-1" />
                </span>
                <span className="text-orange-400 w-[19px] h-[18px] mx-1">
                  <AiTwotoneStar className="w-[19px] h-[18px] mx-1" />
                </span>
                <span>
                  <AiOutlineStar className="w-[19px] h-[18px] mx-2" />
                </span>
              </p>
              <p className="my-4 text-sm">
                I absolutely love my new branded women's purse! It's not only
                stylish and chic but also incredibly functional. The quality is
                top-notch, and the attention to detail is evident. It's the
                perfect accessory to elevate any outfit while keeping my
                essentials organized. Worth every penny!
              </p>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="grid grid-cols-2 text-[#7C7C7C]">
            <p className="font-medium">REVIEW THIS PRODUCT</p>
            <Button variant="link" className="text-[#FF6A02] ml-auto">
              SEE ALL REVIEWS
            </Button>
          </div>
          <div className="text-[#7C7C7C] ">
            <p className="flex">
              <span className="mt-2">
                <AiOutlineStar className="w-[19px] h-[18px] mr-1" />
              </span>
              <span className="mt-2">
                <AiOutlineStar className="w-[19px] h-[18px] mx-1" />
              </span>
              <span className="mt-2">
                <AiOutlineStar className="w-[19px] h-[18px] mx-1" />
              </span>
              <span className="mt-2">
                <AiOutlineStar className="w-[19px] h-[18px] mx-1" />
              </span>
              <span className="mt-2">
                <AiOutlineStar className="w-[19px] h-[18px] mx-1" />
              </span>{" "}
              <span className="text-[#FF6A02] mt-1 ml-4">Write a Review</span>
            </p>
            <Textarea className="mt-5" placeholder="Type your review here." />
            <div className="flex flex-row-reverse mt-5">
              <Button className="w-[162px] h-[48px]" size="lg">
                Submit
              </Button>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-[#464646] pr-4 text-sm">
            <p className="text-[#464646] mb-8 text-base">
              <b>SELLER INFORMATION</b>
            </p>
            <p>
              <span className="text-[#484848]">
                <b>Manufacture Country :</b>
              </span>
              <span className="text-[#484848]"> India</span>
            </p>
            <p>
              <span className="text-[#484848]">
                <b>Generic Name :</b>
              </span>
              <span className="text-[#484848]"> Branded Purse</span>
            </p>
            <p>
              <span className="text-[#484848]">
                <b>Sold By :</b>
              </span>
              <span className="text-[#484848]">
                {" "}
                Reliance retail limited, 3rd Floor, Court House, Lokmanya Tilak
                Margz, Dhobi Talao, Mumbai - 400 002, #0821-6600100
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden justify-items-center">
        <div className="ml-2">
          <div className="grid grid-cols-2 ">
            <Image
              className="p-1 h-428"
              src="/istockphoto-1133140907-612x612.jpg"
              alt="Product Image"
              width={500}
              height={500}
            />
            <Image
              className="p-1 h-428"
              src="/u4wsr_512.webp"
              alt="Product Image"
              width={500}
              height={500}
            />
            <Image
              className="p-1 h-428"
              src="/artboard-4-500x500.webp"
              alt="Product Image"
              width={500}
              height={500}
            />
            <Image
              className="p-1 h-428"
              src="/download.jpg"
              alt="Product Image"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className=" text-center p-3">
          <h1 className="text-xl">
            <b>Women Premium Purse for Classy Look</b>
          </h1>
          <p className="text-xs flex items-center justify-center my-6 text-[#9C9C9C]">
            <AiTwotoneStar className="text-[#FF6A02] h-4 w-4" /> 4.3 | 2.5k
            Ratings
          </p>
          <p className="text-[#D1D1D1] border-b"></p>
          <p className="mt-4">
            <span className="text-[#FF6A02] mr-2 ">
              <b>₹99,999/-</b>
            </span>
            <span className="text-[#3C3C3C] ">
              {" "}
              MRP <span className="line-through"> ₹1,27,799</span>
            </span>
            <span className="text-[#FF6A02] ml-2">(61% Off)</span>
            <span className="text-xs text-[#606060] ">
              (Inclusive Of All Taxes)
            </span>
          </p>
        </div>
        <Separator className="mb-4" />
        <div className="text-center text-[#7C7C7C] ">
          <h1 className="my-2">ALL SHADES (3)</h1>
        </div>
        <div className="flex flex-wrap justify-items-center text-center ml-[110px] p-2">
          <div className="ml-1 mr-1 mt-2  space-between h-10 w-10 bg-black rounded-[50%]"></div>
          <div className="ml-1 mr-1 mt-2 space-between h-10 w-10 bg-red-800 rounded-[50%]"></div>
          <div className="ml-1 mr-1 mt-2 space-between h-10 w-10 bg-lime-800 rounded-[50%]"></div>
        </div>
        <Separator className="my-8" />
        <div className="mt-5 px-2 justify-items-center justify-evenly flex text-center text-xs">
          <Button variant="outline" className="bg-[#F5F5F5]">
            <AiOutlineMinus />
          </Button>
          <p className="mt-2 ml-4 mr-4">2</p>
          <Button variant="outline" className="bg-[#F5F5F5]">
            <AiOutlinePlus />
          </Button>
          <Button className="">
            Add to Cart <AiOutlineShoppingCart className="ml-2" />
          </Button>
        </div>
        <div className="mt-10 px-4">
          <p>
            <b>ESTIMATE DELIVERY</b>
          </p>
          <div className="mt-2 flex w-full max-w-sm items-center ">
            <Input
              type="number"
              className="rounded-none"
              placeholder="Enter Pin Code"
            />
            <Button
              type="submit"
              variant="secondary"
              className="text-[#FF6A02] bg-[#F5F5F5] "
            >
              Check
            </Button>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="p-4 text-sm text-[#7C7C7C] ">
          <p>
            <b>DESCRIPTION</b>
          </p>
          <p className="my-4">
            {" "}
            <span>Product Code:</span>{" "}
            <b className="text-orange-400"> BR5016R13</b>
          </p>
          <p>
            Aishu-Baba is a feel-good fashion brand for the youth, that
            redefines the concept of luxury through fashion accessories that are
            premium in quality, yet affordable in price. We believe that luxury
            is not about the price tag, but it is about the special experience
            that our collection delivers. Each our creation is luxuriously
            crafted in India.
          </p>
          <ul className="my-4 list-disc ml-3">
            <li>Length - 11 ,Width - 3.75 ,Height - 8 Inches</li>
            <li>Outer Material - PU</li>
            <li>Inner Material - Synthethic</li>
            <li>Main Compartment - 1.</li>
            <li>Inner Pocket - 1</li>
            <li>Outer Pocket - 0</li>
          </ul>
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-3 gap-2 p-2">
          <Image
            className="h-[63px]"
            src="/cash-on-delivery-services-500x500.webp"
            alt="Service"
            width={229}
            height={63}
          />
          <Image
            className="h-[63px]"
            src="/innovationmobility-transportaxlehire-no-touch-delivery-coronavirus.png"
            alt="Service"
            width={229}
            height={63}
          />
          <Image
            className="h-[63px]"
            src="/360_F_473026422_k3XjtqTh0Br3Iw8IfhlB9c72n9dqi9n5.jpg"
            alt="Service"
            width={229}
            height={63}
          />
        </div>
        <Separator className="my-4" />

        <div className="p-4 justify-items-center text-center text-[#7C7C7C] ">
          <p>Product Review</p>
          <p>
            <span>4.3</span>{" "}
            <span className="text-orange-400">(10 Review)</span>
          </p>
          <p className="flex ml-32">
            <span className="text-orange-400">
              <AiTwotoneStar />
            </span>
            <span className="text-orange-400">
              <AiTwotoneStar />
            </span>
            <span className="text-orange-400">
              <AiTwotoneStar />
            </span>
            <span className="text-orange-400">
              <AiTwotoneStar />
            </span>
            <span>
              <AiOutlineStar />
            </span>
          </p>
          <div className="flex mt-6 justify-items-center text-center">
            <p className="text-sm mr-2">5 Star</p>
            <Progress className="w-[60%] mt-2" value={89} />
            <p className="text-sm ml-2">89%</p>
          </div>
          <div className="flex mt-2">
            <p className="text-sm mr-2">4 Star</p>
            <Progress className="w-[60%] mt-2" value={69} />
            <p className="text-sm ml-2">69%</p>
          </div>
          <div className="flex mt-2">
            <p className="text-sm mr-2">3 Star</p>
            <Progress className="w-[60%] mt-2" value={49} />
            <p className="text-sm ml-2">49%</p>
          </div>
          <div className="flex mt-2">
            <p className="text-sm mr-2">2 Star</p>
            <Progress className="w-[60%] mt-2" value={29} />
            <p className="text-sm ml-2">29%</p>
          </div>
          <div className="flex mt-2">
            <p className="text-sm mr-2">1 Star</p>
            <Progress className="w-[60%] mt-2" value={9} />
            <p className="text-sm ml-2">9%</p>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="p-2 text-[#7C7C7C]">
          <p className="text-center mb-6">
            <b>CUSTOMER REVIEWS</b>
          </p>
          <div>
            <p>
              <span className="text-black">
                <b>DIVYA SINHA </b>{" "}
              </span>
              <span className="text-xs">| 2 Years Ago</span>
            </p>
            <p className="flex">
              <span className="text-orange-400">
                <AiTwotoneStar />
              </span>
              <span className="text-orange-400">
                <AiTwotoneStar />
              </span>
              <span className="text-orange-400">
                <AiTwotoneStar />
              </span>
              <span className="text-orange-400">
                <AiTwotoneStar />
              </span>
              <span>
                <AiOutlineStar />
              </span>
            </p>
            <p className="my-4 text-sm">
              I absolutely adore my new branded women's purse! Its elegant
              design and impeccable craftsmanship make it a true fashion
              statement. The spacious interior and well-organized compartments
              are a practical dream. This purse not only complements my style
              but also adds a touch of luxury to every outfit. Highly
              recommended!
            </p>
          </div>
          <div>
            <p>
              <span className="text-black">
                <b>GUNGUN NIGAM </b>{" "}
              </span>
              <span className="text-xs">| 2 Years Ago</span>
            </p>
            <p className="flex">
              <span className="text-orange-400">
                <AiTwotoneStar />
              </span>
              <span className="text-orange-400">
                <AiTwotoneStar />
              </span>
              <span className="text-orange-400">
                <AiTwotoneStar />
              </span>
              <span className="text-orange-400">
                <AiTwotoneStar />
              </span>
              <span>
                <AiOutlineStar />
              </span>
            </p>
            <p className="my-4 text-sm">
              I absolutely love my new branded women's purse! It's not only
              stylish and chic but also incredibly functional. The quality is
              top-notch, and the attention to detail is evident. It's the
              perfect accessory to elevate any outfit while keeping my
              essentials organized. Worth every penny!
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="p-2 text-[#7C7C7C] ">
          <p>
            <b>REVIEW THIS PRODUCT</b>
          </p>
          <p className="flex">
            <span className="mt-2">
              <AiOutlineStar />
            </span>
            <span className="mt-2">
              <AiOutlineStar />
            </span>
            <span className="mt-2">
              <AiOutlineStar />
            </span>
            <span className="mt-2">
              <AiOutlineStar />
            </span>
            <span className="mt-2">
              <AiOutlineStar />
            </span>{" "}
            <span className="text-orange-400 mt-1 text-sm ml-4">
              Write a Review
            </span>
          </p>
          <Textarea className="mt-5" placeholder="Type your review here." />
          <div className="flex flex-row-reverse mt-2">
            <Button size="lg">Submit</Button>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="p-2 text-sm text-[#484848] ">
          <p>
            <b>Seller Information</b>
          </p>
          <p>
            <span>
              <b>Manufacture Country :</b>
            </span>
            <span> India</span>
          </p>
          <p>
            <span>
              <b>Generic Name :</b>
            </span>
            <span> Branded Purse</span>
          </p>
          <p>
            <span>
              <b>Sold By :</b>
            </span>
            <span>
              {" "}
              Reliance retail limited, 3rd Floor, Court House, Lokmanya Tilak
              Margz, Dhobi Talao, Mumbai - 400 002, #0821-6600100
            </span>
          </p>
        </div>
      </div>
      <div className="my-4 p-6">
        <h1 className="text-[25px]">
          <b>RECOMMENDED PRODUCT</b>
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-items-center">
        <ProductSlider
          data={recommend}
          forHome={false}
          slidesPerView={
            width >= 1439 ? 4 : width >= 1024 ? 3 : width <= 765 ? 2 : 2
          }
          showNavigation={true}
        />
      </div>
      <Footer />
    </div>
  );
}
