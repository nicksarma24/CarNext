"use client";

import React, { useCallback, useState } from "react";

import { Input } from "@/components/ui/input";
import { Camera, Upload } from "lucide-react";
import { Button } from "./ui/button";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const HomeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isImageSearchActive, setIsImageSearchActive] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [searchImage, setSearchImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);


  const router=useRouter()

  const handleTextSubmit = async(e) => {
    e.preventDefault();
    if(!searchTerm){
      toast.error("Please enter a search term")
      return 
    }
    router.push(`/cars?search=${encodeURIComponent(searchTerm)}`)
  };

  const handleImageSearch = async(e) => {
    e.preventDefault();
    if(!searchImage){
      toast.error("Please upload an image first")
      return 
    }
  };

  //in react 19 we dont use usecallback
  const onDrop = (acceptFiles) => {
    const file = acceptFiles[0];
    if(file) {
      if(file.size > 5000000) {
        toast.error("File size exceeds 5MB limit");
        return; 
      }

      setIsUploading(true)
      setSearchImage(file);

      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setIsUploading(false);
        toast.success("Image uploaded successfully!");
      };

      reader.onerror=()=>{
        setIsUploading(false)
        toast.error("Error uploading image. Please try again.")
      }

      reader.readAsDataURL(file);
    }
  };


  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: { "image/*": ["jpeg", "png", "gif"] },
      maxFiles: 1,
      maxSize: 5000000,
    });

  return (
    <div>
      <form action="" onSubmit={handleTextSubmit}>
        <div className="relative flex items-center">
          <Input
            type="text"
            placeholder="Enter make, model, or use our AI Image Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-12 py-6 w-full rounded-full border-gray-300 bg-white/95 backdrop-blur-sm"
          ></Input>

          <div className="absolute right-[140px] pb-8">
            {/* when you click on the camera icon you want to show the ui of react dropzone for drag and drop, and also make isImageSearch active */}
            <Camera
              size={35}
              onClick={() => setIsImageSearchActive(!isImageSearchActive)}
              className="cursor-pointer absolute rounded-xl p-1.5"
              style={{
                background: isImageSearchActive ? "black" : "",
                color: isImageSearchActive ? "white" : "",
              }}
            />
          </div>

          <Button type="submit" className="absolute right-2 runded-full">
            Search
          </Button>
        </div>
      </form>
      {isImageSearchActive && (
        <div className="mt-4 ">
          <form action="" onSubmit={handleImageSearch}>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
              {imagePreview ? (
                <div className="flex flex-col items-center">
                  <img src={imagePreview} alt="Car Preview"  className="h-40 object-contain mb-4"/>
                  <Button variant="outline" onClick={()=>{
                    setSearchImage(null); setImagePreview(""); toast.info("Image removed")
                  }}
                  >Remove Image</Button>
                </div>
              ) : (
                <div {...getRootProps()} className="cursor-pointer">
                  <input type="text" {...getInputProps()} />
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-10 cursor-pointer hover:bg-gray-100 transition">
                  <Upload className="h-12 w-12 text-gray-600 mx-auto" />
                  <p className="text-center text-gray-600 mt-2">
                    {" "}
                    {isDragActive && !isDragReject
                      ? "Leave the files here to upload"
                      : "Drag & drop a car image or click to select"}
                  </p>
                  {isDragReject && (
                    <p className="text-red-500 mt-2">
                      Unsupported file type or file too large
                    </p>
                  )}
                  <p className="text-sm text-gray-500 mt-2">
                    Support: JPG, PNG(max 5MB) - We use AI to find the best
                  </p>
                  </div>
                </div>
              )}
            </div>
              {imagePreview && (
                <Button type="submit" className="mt-4 w-full" disabled={isUploading}>
                    {isUploading ? 
                    "Uploading..." : "Search with this Image"}

                </Button>
              )}
            
          </form>
        </div>
      )}
    </div>
  );
};

export default HomeSearch;
