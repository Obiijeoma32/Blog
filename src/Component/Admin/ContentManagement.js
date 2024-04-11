import { useState } from "react";
import SideBar from "./SideBar";
import article from "../Images/article1.png";
import article2 from "../Images/article2.png";
import category from "../Images/categories.png";
import media1 from "../Images/media1.png";
import media2 from "../Images/media2.png";
import media3 from "../Images/media3.png";

function ContentManagement() {
  const [post, setPost] = useState(true);
  const [categories, setCategories] = useState(false);
  const [media, settMedia] = useState(false);
  const [modal, setModal] = useState(false);
  const [del, setDelete] = useState(false);
  const [addButton, setAddButton] = useState(false);
  const [newPost, setNewPost] = useState(false);
  return (
    <>
      <SideBar />
      <div className=" pl-[320px] pt-[50px] pr-[30px] py-[10px] flex  gap-[30px] flex-col w-full  ">
        {newPost ? (
          <>
            <div className="text-sky-950  text-2xl font-normal font-['Montserrat'] leading-[28.80px]">
              <span onClick={() => setNewPost(false)} className=" cursor-pointer text-[#939393]">
                Content Management /
              </span>
              New Post
            </div>
            <div className="px-[10px] flex flex-col w-full ">
              <input
                type="text"
                className=" outline-sky-950 bg-transparent placeholder:text-neutral-400 placeholder:text-[30px] text-[32px] text-[#001F3F] font-medium font-montserrat tracking-tight w-full h-[100px]  px-[38px]    py-[33px] rounded-[20px] border border-neutral-400 justify-start items-center flex"
                placeholder="Title"
              />
              <div className="w-full outline-sky-950 flex h-[428px] mt-6 p-[40px]  rounded-[20px] border gap-[10px] border-neutral-400 justify-start">
                {addButton ? (
                  <svg className=" cursor-pointer" onClick={() => setAddButton(false)} width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0491 21.2L13.6499 12.8M13.6508 21.2L22.0499 12.8" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M31.8501 17C31.8501 9.26801 25.582 3 17.8501 3C10.1181 3 3.8501 9.26801 3.8501 17C3.8501 24.7319 10.1181 31 17.8501 31C25.582 31 31.8501 24.7319 31.8501 17Z" stroke="#333333" stroke-width="1.5" />
                  </svg>
                ) : (
                  <svg className=" cursor-pointer" onClick={() => setAddButton(true)} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 11.6667V23.3333M23.3334 17.5H11.6667" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M17.5 32.0833C25.5542 32.0833 32.0834 25.5542 32.0834 17.5C32.0834 9.44585 25.5542 2.91667 17.5 2.91667C9.44587 2.91667 2.91669 9.44585 2.91669 17.5C2.91669 25.5542 9.44587 32.0833 17.5 32.0833Z"
                      stroke="#333333"
                      strokeWidth="1.5"
                    />
                  </svg>
                )}
                {addButton ? (
                  <div className="flex gap-[25px] ml-[10px] h-[36px] justify-between items-center">
                    <svg className=" cursor-pointer" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#2ECC71" />
                      <path d="M15 16C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16Z" stroke="#2ECC71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M11.6667 18C11.6667 15.0144 11.6667 13.5217 12.5942 12.5942C13.5217 11.6667 15.0145 11.6667 18.0001 11.6667C20.9856 11.6667 22.4784 11.6667 23.4059 12.5942C24.3334 13.5217 24.3334 15.0144 24.3334 18C24.3334 20.9855 24.3334 22.4783 23.4059 23.4059C22.4784 24.3333 20.9856 24.3333 18.0001 24.3333C15.0145 24.3333 13.5217 24.3333 12.5942 23.4059C11.6667 22.4783 11.6667 20.9855 11.6667 18Z"
                        stroke="#2ECC71"
                        stroke-width="1.5"
                      />
                      <path d="M13.3333 23.9999C16.2482 20.5167 19.516 15.9227 24.3316 19.0283" stroke="#2ECC71" stroke-width="1.5" />
                    </svg>
                    <svg className=" cursor-pointer" onClick={() => setAddButton(false)} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#2ECC71" />
                      <path d="M20 24.0007H16" stroke="#2ECC71" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M17.9999 12V24.0005M17.9999 12C18.9249 12 20.1129 12.0204 21.0589 12.1177C21.4589 12.1588 21.659 12.1794 21.836 12.2519C22.2043 12.4029 22.5011 12.7338 22.6129 13.1179C22.6666 13.3026 22.6666 13.5133 22.6666 13.9348M17.9999 12C17.075 12 15.8869 12.0204 14.941 12.1177C14.5409 12.1588 14.3409 12.1794 14.1638 12.2519C13.7955 12.4029 13.4987 12.7338 13.387 13.1179C13.3333 13.3026 13.3333 13.5133 13.3333 13.9348"
                        stroke="#2ECC71"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                ) : (
                  <textarea className=" bg-transparent w-full h-full outline-none text-[24px] placeholder:text-[24px] font-montserrat font-normal  " placeholder="Tell your story........"></textarea>
                )}
              </div>

              <div className=" mt-[30px] flex gap-[20px] items-end justify-end">
                <div className="flex justify-between items-center gap-[20px]">
                  <div className="text-[#333] text-xl font-medium font-montserrat leading-[25px] w-[164px] h-[45px] px-[30px] py-2.5 border-green-500 border-[1px]  rounded-[20px] whitespace-nowrap  self-center tracking-tight">Save Draft</div>
                  <div className="text-[#001F3F] text-xl font-medium font-montserrat leading-[25px] w-[137px] h-[45px] px-[30px] py-2.5 bg-green-500  rounded-[20px]  self-center tracking-tight">Publish</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <div className="text-sky-950 text-2xl font-normal font-['Montserrat'] leading-[28.80px]">Content Management</div>

              <button onClick={() => setNewPost(true)} className=" h-[45px] w-[137px] bg-[#2ECC71] text-[16px] text-[#001F3F] font-montserrat font-medium flex justify-center items-center  rounded-[20px]  ">
                New Post
              </button>
            </div>
            <div className="flex flex-col gap-[40px] justify-between w-full ">
              <div className="border-b-[#939393] gap-[50px] items-start justify-start flex  h-[90px] border-solid w-full  border-b-[0.5px]">
                <div
                  onClick={() => {
                    setPost(true);
                    setCategories(false);
                    settMedia(false);
                  }}
                  className={`flex cursor-pointer gap-[10px] self-stretch text-[16px] font-montserrat font-normal justify-center items-center ${post ? "text-[#2ECC71]  border-b-[2px] border-b-[#2ECC71] " : "text-[#001F3F]"}`}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.5117 4.15199L14.6798 2.98386C15.325 2.33871 16.371 2.33871 17.0162 2.98386C17.6612 3.629 17.6612 4.67498 17.0162 5.32012L15.848 6.48826M13.5117 4.15199L9.15016 8.51358C8.2791 9.38467 7.84354 9.82016 7.54696 10.3509C7.25038 10.8817 6.95199 12.1349 6.66666 13.3333C7.86506 13.048 9.11832 12.7496 9.64907 12.453C10.1798 12.1564 10.6153 11.7209 11.4864 10.8498L15.848 6.48826M13.5117 4.15199L15.848 6.48826"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 10C17.5 13.5355 17.5 15.3033 16.4017 16.4017C15.3033 17.5 13.5355 17.5 10 17.5C6.46447 17.5 4.6967 17.5 3.59835 16.4017C2.5 15.3033 2.5 13.5355 2.5 10C2.5 6.46447 2.5 4.6967 3.59835 3.59835C4.6967 2.5 6.46447 2.5 10 2.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span>Posts</span>
                </div>
                <div
                  onClick={() => {
                    setPost(false);
                    setCategories(true);
                    settMedia(false);
                  }}
                  className={`flex cursor-pointer gap-[10px] self-stretch text-[16px] font-montserrat font-normal justify-center items-center ${categories ? "text-[#2ECC71]  border-b-[2px] border-b-[#2ECC71] " : "text-[#001F3F]"}`}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.66666 15C1.66666 13.7163 1.66666 13.0744 1.9556 12.6029C2.11727 12.339 2.3391 12.1172 2.60293 11.9555C3.07444 11.6666 3.71629 11.6666 4.99999 11.6666C6.28369 11.6666 6.92554 11.6666 7.39705 11.9555C7.66088 12.1172 7.88271 12.339 8.04438 12.6029C8.33332 13.0744 8.33332 13.7163 8.33332 15C8.33332 16.2836 8.33332 16.9255 8.04438 17.397C7.88271 17.6609 7.66088 17.8827 7.39705 18.0444C6.92554 18.3333 6.28369 18.3333 4.99999 18.3333C3.71629 18.3333 3.07444 18.3333 2.60293 18.0444C2.3391 17.8827 2.11727 17.6609 1.9556 17.397C1.66666 16.9255 1.66666 16.2836 1.66666 15Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M11.6667 15C11.6667 13.7163 11.6667 13.0744 11.9556 12.6029C12.1172 12.339 12.3391 12.1172 12.6029 11.9555C13.0744 11.6666 13.7163 11.6666 15 11.6666C16.2837 11.6666 16.9256 11.6666 17.3971 11.9555C17.6609 12.1172 17.8827 12.339 18.0444 12.6029C18.3333 13.0744 18.3333 13.7163 18.3333 15C18.3333 16.2836 18.3333 16.9255 18.0444 17.397C17.8827 17.6609 17.6609 17.8827 17.3971 18.0444C16.9256 18.3333 16.2837 18.3333 15 18.3333C13.7163 18.3333 13.0744 18.3333 12.6029 18.0444C12.3391 17.8827 12.1172 17.6609 11.9556 17.397C11.6667 16.9255 11.6667 16.2836 11.6667 15Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M1.66666 4.99996C1.66666 3.71626 1.66666 3.07441 1.9556 2.6029C2.11727 2.33907 2.3391 2.11724 2.60293 1.95557C3.07444 1.66663 3.71629 1.66663 4.99999 1.66663C6.28369 1.66663 6.92554 1.66663 7.39705 1.95557C7.66088 2.11724 7.88271 2.33907 8.04438 2.6029C8.33332 3.07441 8.33332 3.71626 8.33332 4.99996C8.33332 6.28366 8.33332 6.92551 8.04438 7.39702C7.88271 7.66085 7.66088 7.88268 7.39705 8.04435C6.92554 8.33329 6.28369 8.33329 4.99999 8.33329C3.71629 8.33329 3.07444 8.33329 2.60293 8.04435C2.3391 7.88268 2.11727 7.66085 1.9556 7.39702C1.66666 6.92551 1.66666 6.28366 1.66666 4.99996Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M11.6667 4.99996C11.6667 3.71626 11.6667 3.07441 11.9556 2.6029C12.1172 2.33907 12.3391 2.11724 12.6029 1.95557C13.0744 1.66663 13.7163 1.66663 15 1.66663C16.2837 1.66663 16.9256 1.66663 17.3971 1.95557C17.6609 2.11724 17.8827 2.33907 18.0444 2.6029C18.3333 3.07441 18.3333 3.71626 18.3333 4.99996C18.3333 6.28366 18.3333 6.92551 18.0444 7.39702C17.8827 7.66085 17.6609 7.88268 17.3971 8.04435C16.9256 8.33329 16.2837 8.33329 15 8.33329C13.7163 8.33329 13.0744 8.33329 12.6029 8.04435C12.3391 7.88268 12.1172 7.66085 11.9556 7.39702C11.6667 6.92551 11.6667 6.28366 11.6667 4.99996Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </svg>

                  <span>Categories</span>
                </div>
                <div
                  onClick={() => {
                    setPost(false);
                    setCategories(false);
                    settMedia(true);
                  }}
                  className={`flex cursor-pointer gap-[10px] self-stretch text-[16px] font-montserrat font-normal justify-center items-center ${media ? "text-[#2ECC71]  border-b-[2px] border-b-[#2ECC71] " : "text-[#001F3F]"}`}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.5 12.5C2.5 10.1592 2.5 8.98879 3.06177 8.14806C3.30497 7.78409 3.61747 7.47159 3.98143 7.22839C4.82217 6.66663 5.99257 6.66663 8.33333 6.66663H11.6667C14.0074 6.66663 15.1778 6.66663 16.0186 7.22839C16.3825 7.47159 16.695 7.78409 16.9382 8.14806C17.5 8.98879 17.5 10.1592 17.5 12.5C17.5 14.8407 17.5 16.0111 16.9382 16.8519C16.695 17.2158 16.3825 17.5283 16.0186 17.7715C15.1778 18.3333 14.0074 18.3333 11.6667 18.3333H8.33333C5.99257 18.3333 4.82217 18.3333 3.98143 17.7715C3.61747 17.5283 3.30497 17.2158 3.06177 16.8519C2.5 16.0111 2.5 14.8407 2.5 12.5Z"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.4167 13.75C10.4167 14.4404 9.857 15 9.16666 15C8.47633 15 7.91666 14.4404 7.91666 13.75C7.91666 13.0597 8.47633 12.5 9.16666 12.5C9.857 12.5 10.4167 13.0597 10.4167 13.75ZM10.4167 13.75V9.58337C10.4167 9.58337 10.75 11.0278 12.0833 11.25"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.8333 6.66663C15.8184 5.63348 15.7417 5.04773 15.3485 4.65478C14.8601 4.16663 14.074 4.16663 12.5018 4.16663H7.49819C5.92598 4.16663 5.13988 4.16663 4.65146 4.65478C4.2583 5.04773 4.18161 5.63348 4.16666 6.66663"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.1667 4.16663C14.1667 3.39006 14.1667 3.00178 14.0398 2.69548C13.8707 2.28711 13.5462 1.96265 13.1378 1.79349C12.8315 1.66663 12.4433 1.66663 11.6667 1.66663H8.33334C7.55677 1.66663 7.16849 1.66663 6.86219 1.79349C6.45382 1.96265 6.12936 2.28711 5.9602 2.69548C5.83334 3.00178 5.83334 3.39006 5.83334 4.16663"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span>Media Library</span>
                </div>
              </div>
              {post && (
                <div className=" w-full gap-[30px] flex-col flex justify-between items-start">
                  <div className="w-full gap-[30px] flex-grow overflow-x-scroll flex justify-between items-center ">
                    <div className=" flex-col flex justify-between items-start w-[400px] flex-1 h-fit gap-[20px]">
                      <div className=" flex justify-between items-center w-full">
                        <div className="w-[278px] text-sky-950 text-lg font-medium font-['Montserrat'] leading-[30px] tracking-tight">Tech Innovators: African Diaspora Changing the Game</div>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.75 5.375L4.29086 4.22116C4.71034 3.32629 4.92007 2.87885 5.34519 2.62693C5.77031 2.375 6.31563 2.375 7.40625 2.375H11.3438C12.4344 2.375 12.9797 2.375 13.4048 2.62693C13.8299 2.87885 14.0397 3.32629 14.4591 4.22116L15 5.375"
                            stroke="#001F3F"
                            stroke-width="1.125"
                            stroke-linecap="round"
                          />
                          <path
                            d="M3.75 8.57397V5.375H15V8.57397C15 10.9551 15 12.1456 14.2678 12.8853C13.5356 13.625 12.357 13.625 9.99997 13.625H8.75003C6.39298 13.625 5.21446 13.625 4.48223 12.8853C3.75 12.1456 3.75 10.9551 3.75 8.57397Z"
                            stroke="#001F3F"
                            stroke-width="1.125"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path d="M8.29688 6.09375H10.4531" stroke="#001F3F" stroke-width="1.125" stroke-linecap="round" />
                        </svg>
                      </div>
                      <div className="w-full">
                        <img src={article} alt="post" />
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <div className="text-neutral-400 text-xs font-medium font-['Montserrat'] tracking-tight">January 10th, 2024</div>
                        <div className="p-2.5 self-stretch w-[100px] h-[35px]  bg-emerald-50 rounded-[40px] justify-center items-center gap-[5px] flex">
                          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.91667 8.32812L4.95834 10.3698L11.0833 3.95312" stroke="#11CA60" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          <div className="text-green-500 text-xs font-normal font-['Montserrat'] tracking-tight">Published</div>
                        </div>
                        <div onClick={() => setModal(true)} className=" cursor-pointer p-2.5 w-[38px] h-[38px] bg-zinc-100 rounded-[40px] justify-center items-center gap-2.5 flex">
                          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.99693 9.16138H9.00368" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.4999 9.16138H13.5066" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.49986 9.16138H4.50659" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className=" flex-col flex justify-between items-start w-[400px] flex-1 h-fit gap-[20px]">
                      <div className=" flex justify-between items-center w-full">
                        <div className="w-[278px] text-sky-950 text-lg font-medium font-['Montserrat'] leading-[30px] tracking-tight">Tech Innovators: African Diaspora Changing the Game</div>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.75 5.375L4.29086 4.22116C4.71034 3.32629 4.92007 2.87885 5.34519 2.62693C5.77031 2.375 6.31563 2.375 7.40625 2.375H11.3438C12.4344 2.375 12.9797 2.375 13.4048 2.62693C13.8299 2.87885 14.0397 3.32629 14.4591 4.22116L15 5.375"
                            stroke="#001F3F"
                            stroke-width="1.125"
                            stroke-linecap="round"
                          />
                          <path
                            d="M3.75 8.57397V5.375H15V8.57397C15 10.9551 15 12.1456 14.2678 12.8853C13.5356 13.625 12.357 13.625 9.99997 13.625H8.75003C6.39298 13.625 5.21446 13.625 4.48223 12.8853C3.75 12.1456 3.75 10.9551 3.75 8.57397Z"
                            stroke="#001F3F"
                            stroke-width="1.125"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path d="M8.29688 6.09375H10.4531" stroke="#001F3F" stroke-width="1.125" stroke-linecap="round" />
                        </svg>
                      </div>
                      <div className="w-full">
                        <img src={article2} alt="post" />
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <div className="text-neutral-400 text-xs font-medium font-['Montserrat'] tracking-tight">January 10th, 2024</div>
                        <div className="p-2.5 self-stretch w-[100px] h-[35px]  bg-[#FAF1E3] rounded-[40px] justify-center items-center gap-[5px] flex">
                          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.16667 8.91138C1.24995 9.16069 1.34764 9.40318 1.4587 9.63774M2.40653 11.0967C2.59093 11.311 2.78892 11.5128 2.99914 11.7005M5.25001 12.9947C4.98881 12.9105 4.73493 12.8094 4.48958 12.6927"
                              stroke="#CA8011"
                              stroke-width="0.875"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7 8.03638C7.48323 8.03638 7.875 7.64461 7.875 7.16138C7.875 6.67814 7.48323 6.28638 7 6.28638C6.51677 6.28638 6.125 6.67814 6.125 7.16138M7 8.03638C6.51677 8.03638 6.125 7.64461 6.125 7.16138M7 8.03638V9.49471M6.125 7.16138H3.5"
                              stroke="#CA8011"
                              stroke-width="0.875"
                              stroke-linecap="round"
                            />
                            <path
                              d="M7.00001 12.9948C10.2216 12.9948 12.8333 10.3831 12.8333 7.16146C12.8333 3.9398 10.2216 1.32812 7.00001 1.32812C3.77834 1.32812 1.16667 3.9398 1.16667 7.16146"
                              stroke="#CA8011"
                              stroke-width="0.875"
                              stroke-linecap="round"
                            />
                          </svg>

                          <div className="text-[#ca8011] text-xs font-normal font-['Montserrat'] tracking-tight">Pending</div>
                        </div>
                        <div onClick={() => setModal(true)} className=" cursor-pointer p-2.5 w-[38px] h-[38px] bg-zinc-100 rounded-[40px] justify-center items-center gap-2.5 flex">
                          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.99693 9.16138H9.00368" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.4999 9.16138H13.5066" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.49986 9.16138H4.50659" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className=" flex-col flex justify-between items-start w-[400px] flex-1 h-fit gap-[20px]">
                      <div className=" flex justify-between items-center w-full">
                        <div className="w-[278px] text-sky-950 text-lg font-medium font-['Montserrat'] leading-[30px] tracking-tight">Tech Innovators: African Diaspora Changing the Game</div>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.75 5.375L4.29086 4.22116C4.71034 3.32629 4.92007 2.87885 5.34519 2.62693C5.77031 2.375 6.31563 2.375 7.40625 2.375H11.3438C12.4344 2.375 12.9797 2.375 13.4048 2.62693C13.8299 2.87885 14.0397 3.32629 14.4591 4.22116L15 5.375"
                            stroke="#001F3F"
                            stroke-width="1.125"
                            stroke-linecap="round"
                          />
                          <path
                            d="M3.75 8.57397V5.375H15V8.57397C15 10.9551 15 12.1456 14.2678 12.8853C13.5356 13.625 12.357 13.625 9.99997 13.625H8.75003C6.39298 13.625 5.21446 13.625 4.48223 12.8853C3.75 12.1456 3.75 10.9551 3.75 8.57397Z"
                            stroke="#001F3F"
                            stroke-width="1.125"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path d="M8.29688 6.09375H10.4531" stroke="#001F3F" stroke-width="1.125" stroke-linecap="round" />
                        </svg>
                      </div>
                      <div className="w-full">
                        <img src={article} alt="post" />
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <div className="text-neutral-400 text-xs font-medium font-['Montserrat'] tracking-tight">January 10th, 2024</div>
                        <div className="p-2.5 self-stretch w-[100px] h-[35px]  bg-emerald-50 rounded-[40px] justify-center items-center gap-[5px] flex">
                          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.91667 8.32812L4.95834 10.3698L11.0833 3.95312" stroke="#11CA60" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          <div className="text-green-500 text-xs font-normal font-['Montserrat'] tracking-tight">Published</div>
                        </div>
                        <div onClick={() => setModal(true)} className=" cursor-pointer p-2.5 w-[38px] h-[38px] bg-zinc-100 rounded-[40px] justify-center items-center gap-2.5 flex">
                          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.99693 9.16138H9.00368" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.4999 9.16138H13.5066" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.49986 9.16138H4.50659" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full gap-[30px] overflow-x-scroll flex justify-between items-center ">
                    <div className=" flex-col flex justify-between items-start w-[400px] flex-1 h-fit gap-[20px]">
                      <div className=" flex justify-between items-center w-full">
                        <div className="w-[278px] text-sky-950 text-lg font-medium font-['Montserrat'] leading-[30px] tracking-tight">Tech Innovators: African Diaspora Changing the Game</div>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.75 5.375L4.29086 4.22116C4.71034 3.32629 4.92007 2.87885 5.34519 2.62693C5.77031 2.375 6.31563 2.375 7.40625 2.375H11.3438C12.4344 2.375 12.9797 2.375 13.4048 2.62693C13.8299 2.87885 14.0397 3.32629 14.4591 4.22116L15 5.375"
                            stroke="#001F3F"
                            stroke-width="1.125"
                            stroke-linecap="round"
                          />
                          <path
                            d="M3.75 8.57397V5.375H15V8.57397C15 10.9551 15 12.1456 14.2678 12.8853C13.5356 13.625 12.357 13.625 9.99997 13.625H8.75003C6.39298 13.625 5.21446 13.625 4.48223 12.8853C3.75 12.1456 3.75 10.9551 3.75 8.57397Z"
                            stroke="#001F3F"
                            stroke-width="1.125"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path d="M8.29688 6.09375H10.4531" stroke="#001F3F" stroke-width="1.125" stroke-linecap="round" />
                        </svg>
                      </div>
                      <div className="w-full">
                        <img src={article} alt="post" />
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <div className="text-neutral-400 text-xs font-medium font-['Montserrat'] tracking-tight">January 10th, 2024</div>
                        <div className="p-2.5 self-stretch w-[100px] h-[35px]  bg-emerald-50 rounded-[40px] justify-center items-center gap-[5px] flex">
                          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.91667 8.32812L4.95834 10.3698L11.0833 3.95312" stroke="#11CA60" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          <div className="text-green-500 text-xs font-normal font-['Montserrat'] tracking-tight">Published</div>
                        </div>
                        <div onClick={() => setModal(true)} className=" cursor-pointer p-2.5 w-[38px] h-[38px] bg-zinc-100 rounded-[40px] justify-center items-center gap-2.5 flex">
                          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.99693 9.16138H9.00368" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.4999 9.16138H13.5066" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.49986 9.16138H4.50659" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className=" flex-col flex justify-between items-start w-[400px] flex-1 h-fit gap-[20px]">
                      <div className=" flex justify-between items-center w-full">
                        <div className="w-[278px] text-sky-950 text-lg font-medium font-['Montserrat'] leading-[30px] tracking-tight">Tech Innovators: African Diaspora Changing the Game</div>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.75 5.375L4.29086 4.22116C4.71034 3.32629 4.92007 2.87885 5.34519 2.62693C5.77031 2.375 6.31563 2.375 7.40625 2.375H11.3438C12.4344 2.375 12.9797 2.375 13.4048 2.62693C13.8299 2.87885 14.0397 3.32629 14.4591 4.22116L15 5.375"
                            stroke="#001F3F"
                            stroke-width="1.125"
                            stroke-linecap="round"
                          />
                          <path
                            d="M3.75 8.57397V5.375H15V8.57397C15 10.9551 15 12.1456 14.2678 12.8853C13.5356 13.625 12.357 13.625 9.99997 13.625H8.75003C6.39298 13.625 5.21446 13.625 4.48223 12.8853C3.75 12.1456 3.75 10.9551 3.75 8.57397Z"
                            stroke="#001F3F"
                            stroke-width="1.125"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path d="M8.29688 6.09375H10.4531" stroke="#001F3F" stroke-width="1.125" stroke-linecap="round" />
                        </svg>
                      </div>
                      <div className="w-full">
                        <img src={article2} alt="post" />
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <div className="text-neutral-400 text-xs font-medium font-['Montserrat'] tracking-tight">January 10th, 2024</div>
                        <div className="p-2.5 self-stretch w-[100px] h-[35px]  bg-[#FAF1E3] rounded-[40px] justify-center items-center gap-[5px] flex">
                          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.16667 8.91138C1.24995 9.16069 1.34764 9.40318 1.4587 9.63774M2.40653 11.0967C2.59093 11.311 2.78892 11.5128 2.99914 11.7005M5.25001 12.9947C4.98881 12.9105 4.73493 12.8094 4.48958 12.6927"
                              stroke="#CA8011"
                              stroke-width="0.875"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7 8.03638C7.48323 8.03638 7.875 7.64461 7.875 7.16138C7.875 6.67814 7.48323 6.28638 7 6.28638C6.51677 6.28638 6.125 6.67814 6.125 7.16138M7 8.03638C6.51677 8.03638 6.125 7.64461 6.125 7.16138M7 8.03638V9.49471M6.125 7.16138H3.5"
                              stroke="#CA8011"
                              stroke-width="0.875"
                              stroke-linecap="round"
                            />
                            <path
                              d="M7.00001 12.9948C10.2216 12.9948 12.8333 10.3831 12.8333 7.16146C12.8333 3.9398 10.2216 1.32812 7.00001 1.32812C3.77834 1.32812 1.16667 3.9398 1.16667 7.16146"
                              stroke="#CA8011"
                              stroke-width="0.875"
                              stroke-linecap="round"
                            />
                          </svg>

                          <div className="text-[#ca8011] text-xs font-normal font-['Montserrat'] tracking-tight">Pending</div>
                        </div>
                        <div onClick={() => setModal(true)} className=" cursor-pointer p-2.5 w-[38px] h-[38px] bg-zinc-100 rounded-[40px] justify-center items-center gap-2.5 flex">
                          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.99693 9.16138H9.00368" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.4999 9.16138H13.5066" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.49986 9.16138H4.50659" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className=" flex-col flex justify-between items-start w-[400px] flex-1 h-fit gap-[20px]">
                      <div className=" flex justify-between items-center w-full">
                        <div className="w-[278px] text-sky-950 text-lg font-medium font-['Montserrat'] leading-[30px] tracking-tight">Tech Innovators: African Diaspora Changing the Game</div>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.75 5.375L4.29086 4.22116C4.71034 3.32629 4.92007 2.87885 5.34519 2.62693C5.77031 2.375 6.31563 2.375 7.40625 2.375H11.3438C12.4344 2.375 12.9797 2.375 13.4048 2.62693C13.8299 2.87885 14.0397 3.32629 14.4591 4.22116L15 5.375"
                            stroke="#001F3F"
                            stroke-width="1.125"
                            stroke-linecap="round"
                          />
                          <path
                            d="M3.75 8.57397V5.375H15V8.57397C15 10.9551 15 12.1456 14.2678 12.8853C13.5356 13.625 12.357 13.625 9.99997 13.625H8.75003C6.39298 13.625 5.21446 13.625 4.48223 12.8853C3.75 12.1456 3.75 10.9551 3.75 8.57397Z"
                            stroke="#001F3F"
                            stroke-width="1.125"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path d="M8.29688 6.09375H10.4531" stroke="#001F3F" stroke-width="1.125" stroke-linecap="round" />
                        </svg>
                      </div>
                      <div className="w-full">
                        <img src={article} alt="post" />
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <div className="text-neutral-400 text-xs font-medium font-['Montserrat'] tracking-tight">January 10th, 2024</div>
                        <div className="p-2.5 self-stretch w-[100px] h-[35px]  bg-emerald-50 rounded-[40px] justify-center items-center gap-[5px] flex">
                          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.91667 8.32812L4.95834 10.3698L11.0833 3.95312" stroke="#11CA60" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          <div className="text-green-500 text-xs font-normal font-['Montserrat'] tracking-tight">Published</div>
                        </div>
                        <div onClick={() => setModal(true)} className=" cursor-pointer p-2.5 w-[38px] h-[38px] bg-zinc-100 rounded-[40px] justify-center items-center gap-2.5 flex">
                          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.99693 9.16138H9.00368" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.4999 9.16138H13.5066" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.49986 9.16138H4.50659" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {categories && (
                <div className=" w-full gap-[30px] flex-col flex justify-between items-start">
                  <div className="w-full flex-grow gap-[30px] overflow-x-scroll flex justify-between items-center ">
                    <div className="w-[345.33px] flex-1 h-fit px-6 pt-6 pb-8 bg-zinc-200 shadow flex-col justify-start items-start gap-8 inline-flex">
                      <img className="w-full  relative" alt="Category" src={category} />
                      <div className=" gap-[12px] flex-col justify-between items-start flex">
                        <div className="self-stretch text-sky-950 text-sm font-normal font-['Montserrat'] leading-tight">Design</div>
                        <div className=" flex flex-col justify-between items-start gap-[12px]">
                          <div className="self-stretch justify-start items-start gap-4 inline-flex">
                            <div className=" text-zinc-800 text-[24px] font-semibold font-['Roboto'] leading-[32px]">UX review presentations</div>
                            <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.33325 21L17.3333 11M17.3333 11H7.33325M17.3333 11V21" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                          <div className="self-stretch text-neutral-400 text-sm font-normal font-['Montserrat'] leading-normal">How do you create compelling presentations that wow your colleagues and impress your managers?</div>
                        </div>{" "}
                      </div>
                    </div>
                    <div className="w-[345.33px] flex-1 h-fit px-6 pt-6 pb-8 bg-zinc-200 shadow flex-col justify-start items-start gap-8 inline-flex">
                      <img className="w-full  relative" alt="Category" src={category} />
                      <div className=" gap-[12px] flex-col justify-between items-start flex">
                        <div className="self-stretch text-sky-950 text-sm font-normal font-['Montserrat'] leading-tight">Design</div>
                        <div className=" flex flex-col justify-between items-start gap-[12px]">
                          <div className="self-stretch justify-start items-start gap-4 inline-flex">
                            <div className=" text-zinc-800 text-[24px] font-semibold font-['Roboto'] leading-[32px]">UX review presentations</div>
                            <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.33325 21L17.3333 11M17.3333 11H7.33325M17.3333 11V21" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                          <div className="self-stretch text-neutral-400 text-sm font-normal font-['Montserrat'] leading-normal">How do you create compelling presentations that wow your colleagues and impress your managers?</div>
                        </div>{" "}
                      </div>
                    </div>
                    <div className="w-[345.33px] flex-1 h-fit px-6 pt-6 pb-8 bg-zinc-200 shadow flex-col justify-start items-start gap-8 inline-flex">
                      <img className="w-full  relative" alt="Category" src={category} />
                      <div className=" gap-[12px] flex-col justify-between items-start flex">
                        <div className="self-stretch text-sky-950 text-sm font-normal font-['Montserrat'] leading-tight">Design</div>
                        <div className=" flex flex-col justify-between items-start gap-[12px]">
                          <div className="self-stretch justify-start items-start gap-4 inline-flex">
                            <div className=" text-zinc-800 text-[24px] font-semibold font-['Roboto'] leading-[32px]">UX review presentations</div>
                            <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.33325 21L17.3333 11M17.3333 11H7.33325M17.3333 11V21" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                          <div className="self-stretch text-neutral-400 text-sm font-normal font-['Montserrat'] leading-normal">How do you create compelling presentations that wow your colleagues and impress your managers?</div>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {media && (
                <>
                  <div className=" w-full gap-[30px] flex-col flex justify-between items-start">
                    <div className="w-full flex-grow gap-[30px] overflow-x-scroll flex justify-between items-center ">
                      <div className=" flex flex-1 flex-col justify-between">
                        <img src={media1} alt="Media" />
                        <div className="w-full h-[172px] mt-[-170px] pt-[83px] justify-center items-center inline-flex">
                          <div className="grow shrink basis-0 self-stretch  flex-col justify-center items-center inline-flex">
                            <div className="self-stretch h-[88px] p-6 bg-white bg-opacity-30 backdrop-blur-xl flex-col justify-start items-start gap-6 flex">
                              <div className="self-stretch justify-between items-start inline-flex">
                                <div className="flex-col justify-start items-start inline-flex">
                                  <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">Olivia Rhye</div>
                                  <div className="text-white text-sm font-normal font-['Inter'] leading-tight">20 Jan 2022</div>
                                </div>
                                <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">Design</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" flex flex-1 flex-col justify-between">
                        <img src={media2} alt="Media" />
                        <div className="w-full h-[172px] mt-[-170px] pt-[83px] justify-center items-center inline-flex">
                          <div className="grow shrink basis-0 self-stretch  flex-col justify-center items-center inline-flex">
                            <div className="self-stretch h-[88px] p-6 bg-white bg-opacity-30 backdrop-blur-xl flex-col justify-start items-start gap-6 flex">
                              <div className="self-stretch justify-between items-start inline-flex">
                                <div className="flex-col justify-start items-start inline-flex">
                                  <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">Olivia Rhye</div>
                                  <div className="text-white text-sm font-normal font-['Inter'] leading-tight">20 Jan 2022</div>
                                </div>
                                <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">Design</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" flex flex-1 flex-col justify-between">
                        <img src={media3} alt="Media" />
                        <div className="w-full h-[172px] mt-[-170px] pt-[83px] justify-center items-center inline-flex">
                          <div className="grow shrink basis-0 self-stretch  flex-col justify-center items-center inline-flex">
                            <div className="self-stretch h-[88px] p-6 bg-white bg-opacity-30 backdrop-blur-xl flex-col justify-start items-start gap-6 flex">
                              <div className="self-stretch justify-between items-start inline-flex">
                                <div className="flex-col justify-start items-start inline-flex">
                                  <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">Olivia Rhye</div>
                                  <div className="text-white text-sm font-normal font-['Inter'] leading-tight">20 Jan 2022</div>
                                </div>
                                <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">Design</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex-grow gap-[30px] overflow-x-scroll flex justify-between items-center ">
                      <div className=" flex flex-1 flex-col justify-between">
                        <img src={media2} alt="Media" />
                        <div className="w-full h-[172px] mt-[-170px] pt-[83px] justify-center items-center inline-flex">
                          <div className="grow shrink basis-0 self-stretch  flex-col justify-center items-center inline-flex">
                            <div className="self-stretch h-[88px] p-6 bg-white bg-opacity-30 backdrop-blur-xl flex-col justify-start items-start gap-6 flex">
                              <div className="self-stretch justify-between items-start inline-flex">
                                <div className="flex-col justify-start items-start inline-flex">
                                  <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">Olivia Rhye</div>
                                  <div className="text-white text-sm font-normal font-['Inter'] leading-tight">20 Jan 2022</div>
                                </div>
                                <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">Design</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" flex flex-1 flex-col justify-between">
                        <img src={media3} alt="Media" />
                        <div className="w-full h-[172px] mt-[-170px] pt-[83px] justify-center items-center inline-flex">
                          <div className="grow shrink basis-0 self-stretch  flex-col justify-center items-center inline-flex">
                            <div className="self-stretch h-[88px] p-6 bg-white bg-opacity-30 backdrop-blur-xl flex-col justify-start items-start gap-6 flex">
                              <div className="self-stretch justify-between items-start inline-flex">
                                <div className="flex-col justify-start items-start inline-flex">
                                  <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">Olivia Rhye</div>
                                  <div className="text-white text-sm font-normal font-['Inter'] leading-tight">20 Jan 2022</div>
                                </div>
                                <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">Design</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" flex flex-1 flex-col justify-between">
                        <img src={media1} alt="Media" />
                        <div className="w-full h-[172px] mt-[-170px] pt-[83px] justify-center items-center inline-flex">
                          <div className="grow shrink basis-0 self-stretch  flex-col justify-center items-center inline-flex">
                            <div className="self-stretch h-[88px] p-6 bg-white bg-opacity-30 backdrop-blur-xl flex-col justify-start items-start gap-6 flex">
                              <div className="self-stretch justify-between items-start inline-flex">
                                <div className="flex-col justify-start items-start inline-flex">
                                  <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">Olivia Rhye</div>
                                  <div className="text-white text-sm font-normal font-['Inter'] leading-tight">20 Jan 2022</div>
                                </div>
                                <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">Design</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {modal && (
                <div className="w-full p-[50px] h-full z-10 bg-[#000] flex justify-center items-center bg-opacity-40 top-0 left-0 fixed ">
                  <div className=" absolute top-[50px] left-[92%] ">
                    <div onClick={() => setModal(false)} className=" cursor-pointer flex justify-center bg-[#5D5D5D] items-center w-[40px] h-[40px] rounded-full ">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8332 4.16663L4.1665 15.8333M4.1665 4.16663L15.8332 15.8333" stroke="#F5F5F5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                  {del === true ? (
                    <div className="w-[459px] h-fit rounded-[20px] p-[10px] bg-[#f5f5f5] ">
                      <div className=" w-full h-full flex justify-between flex-col p-[30px] gap-[40px] items-center rounded-[20px] bg-white">
                        <div className=" w-[80px] bg-[#D8FDD9] justify-center flex items-center border-[10px] border-[#edffee] h-[80px] rounded-full ">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.3335 23.3333L14.1668 29.1666L31.6668 10.8333" stroke="#4CAF50" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                        <h3 className="text-[#333] text-[14px] font-montserrat text-center font-normal">Post deleted successfully</h3>
                      </div>
                    </div>
                  ) : (
                    <div className="w-[459px] h-[351px] rounded-[20px] p-[10px] bg-[#f5f5f5] ">
                      <div className=" w-full h-full flex justify-between flex-col p-[30px] gap-[40px] items-center rounded-[20px] bg-white">
                        <div className=" w-[80px] bg-[#FFCCCC] justify-center flex items-center border-[10px] border-[#FFE4E4] h-[80px] rounded-full ">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.6668 8.33325L8.3335 31.6666M8.3335 8.33325L31.6668 31.6666" stroke="#E52C2C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                        <h3 className="text-[#333] text-[14px] font-montserrat text-center font-normal">Are you sure you want to delete this post details</h3>
                        <div className="flex w-full justify-between items-center">
                          <div
                            onClick={() => setModal(false)}
                            className="text-[#001F3F] text-xl font-medium font-montserrat cursor-pointer leading-[25px] w-[143px] h-[45px] px-[30px] py-2.5 bg-green-500   rounded-[20px] whitespace-nowrap  flex justify-center items-center tracking-tight"
                          >
                            No
                          </div>
                          <div
                            onClick={() => setDelete(true)}
                            className="text-[#001F3F] cursor-pointer text-xl font-medium font-montserrat leading-[25px] w-[143px] h-[45px] px-[30px] py-2.5 border-green-500  border-[1px]  rounded-[20px] flex justify-center items-center  tracking-tight"
                          >
                            Yes
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ContentManagement;
