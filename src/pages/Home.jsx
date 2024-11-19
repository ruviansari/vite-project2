import React, { useContext, useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { IoEyeOutline } from "react-icons/io5";
import { Button, Modal } from "antd";
import CartContext from "../context/CartContext";
import loadingimage from '../assets/loadingimage.gif'
// import Skeleton from 'react-loading-skeleton'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Home = () => {
  let ctx = useContext(CartContext);

  let search = ctx.searchValue;
  console.log(search);
  // ek function hai ye
  const [products, setproducts] = useState([]);
const [loading,setloading] =useState(false);

// ******************************LOADING***************
  let getAllData = async () => {
    setloading(true)
    //  Dummy json - Docs  product getall click krna h API copy karenge///
    let res = await fetch("https://dummyjson.com/products?limit=0");
    let data = await res.json();
    console.log(data);
    setloading(false)
    //       console.log(data.product)
    setproducts(data.products);
  };
  useEffect(() => {
    getAllData();
  }, []);
  const handleClick = (e) => {
    console.log(e);
  };
  // Anti Design Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedobj, setselectedobj] = useState("");

  const showModal = (ans) => {
    console.log(ans);
    setselectedobj(ans);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // ***************PAGINATION CODE START HERE********

let btnArr = []

  let filtererdArr = products.filter((ele) =>
    ele.title.toLowerCase().includes(search)
  );
  const [currentPage, setcurrentPage] = useState(1);
  let itemPerPage = 8;
  let lastIndex = currentPage * itemPerPage;
  let firstIndex = lastIndex - itemPerPage;
  let slicedArr = products.slice(firstIndex, lastIndex);
  console.log(slicedArr);

  let noOfButtons = Math.ceil(products.length / itemPerPage);
  console.log(noOfButtons); //25

  // *****************8PAGINATION PART END HERE****************************
    for(let i=1; i<noOfButtons; i++){
btnArr.push(i)
    }
    let handleNext=()=>{
      if(currentPage<noOfButtons){
        setcurrentPage(currentPage+1)
      }
    }
 

    let handleprev=()=>{
      if(currentPage>1){
        setcurrentPage(currentPage-1)
      }
    }

    let handleNumber=(nums,index)=>{
      setcurrentPage(nums)
    }
  // ***************PAGINATION PART END HERE*************************
  return (
   <div>
    {
  loading===true ? <div className="w-[80%] m-auto grid grid-cols-12 gap-4">
{
  Array(8).fill(0).map((digits)=>{
 return<div className="h-[200px] lg:col-span-3  md:col-span-4 sm:col-span-6 col-span-12">
   <SkeletonTheme height={'100%'} baseColor="#202020" highlightColor="#444">
    <p>
      <Skeleton count={3} />
    </p>
  </SkeletonTheme>
  </div>
  })
}
</div> : <div className="bg-blue-400 p-5 w-[80%] h-5px m-auto">
{/* <h1>This is home page</h1>     */}
      <Modal
        width={500}
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <div className="flex items-center gap-3 md:flex-row flex-col">
            <div>
              <img className="" src={selectedobj.thumbnail} alt="" />
            </div>
            <div>
              <h3 className="text-2xl">Title: {selectedobj.title}</h3>
              <p className="my-1">
                <b>category:</b>
                {selectedobj.category}
              </p>
              <p className="my-1">
                <b>Brand:</b>
                {selectedobj.brand}
              </p>
              <p className="my-1">
                <b>Price:</b>
                {selectedobj.price}{" "}
              </p>
              <p className="my-1">
                <b>Rating:</b>
                {selectedobj.rating}
              </p>
              <p className="my-1">
                <b>Description:</b>
                {selectedobj.Description}
              </p>
              <p className="my-1">
                <b>Discount:</b>
                {selectedobj.discount}%
              </p>
              <p className="my-1">
                <b>Stock:</b>
                {selectedobj.stock}
              </p>
            </div>
          </div>
        </div>
        <h3>Reviews</h3>
        <div className="grid grid-cols-12 gap-2 ">
          {selectedobj?.reviews?.map((ele) => {
            return (
              <div className="bg-blue-300 col-span-4 p-6 rounded-lg">
                <p>
                  <b>userename:</b>
                  {ele.reviewerName}
                </p>
                <p>
                  <b>useremail:</b>
                  {ele.reviewerEmail}
                </p>
                <p>
                  <b>rating:</b>
                  {ele.rating}
                </p>
                <p>
                  <b>comment:</b>
                  {ele.comment}
                </p>
              </div>
            );
          })}
        </div>
      </Modal>

      <div>
        <div className="grid grid-cols-12 gap-2 ">
          {slicedArr?.map((ele) => {
            return (
              <Card
                key={ele.id}
                className="relative flex flex-col justify-between lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 "
                sx={{ backgroundColor: "yellow" }}
              >
                <IoEyeOutline
                  onClick={() => showModal(ele)}
                  size={30}
                  className="absolute right-4 top-4"
                />

                {/* <CardMedia
                  component="img"
                  alt="green iguana"
                  height="50"
                  image={ele.thumbnail}
                /> */}

                <img src={ele.thumbnail} className="w-[60%] h-[60%] m-auto" />
                <CardContent>
                  <Typography gutterBottom variant="h8" component="div">
                    {ele.title}
                  </Typography>
                  {/* description show */}

                  {/* <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography> */}
                </CardContent>
                <CardActions>
                  {/* <button
                    onClick={() => handleClick(ele)}
                    className="bg-blue-500 text-white-50 py-2 px-4 rounded-md hover:bg-green-200"
                    size="small"
                  >
                    view product
                  </button> */}
                  <button
                    size="small"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-200"
                    onClick={() => ctx.handleAddToCart(ele)}
                  >
                    Add to cart
                  </button>
                </CardActions>
              </Card>
            );
          })}
        </div>

        <nav
          aria-label="Page navigation example"
          className=" w-max m-auto my-4"
        >
          <ul className="flex justify-center flex-wrap text-wrap -space-x-px text-sm">
            <li onClick={handleprev}>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>

            <li  className="flex justify-center items-center">
              {btnArr.map((nums, index) => {
                return (
                  <a
                    href="#"onClick={()=>handleNumber(nums,index)}
                    key={index}
                    className={
                      nums === currentPage
                        ? "flex items-center justify-center px-2 h-8 leading-tight text-gray-500 bg-yellow-300 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                        : "flex items-center justify-center px-2 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-70 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                  >
                    {nums}
                  </a>
                );
              })}
            </li> 

  

            {/* for NEXT##*************************** */}
            <li onClick={handleNext}>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    }
   </div> 
   
  );
};

export default Home;
