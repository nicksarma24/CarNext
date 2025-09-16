"use client";

import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
// import { Badge, Heart, Image } from "lucide-react";
import { Badge } from "./ui/badge"; // correct import
import { Heart } from "lucide-react"; // keep this

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const CarCard = ({ car }) => {
  const [isSaved, setSaved] = useState(car.wishlisted);
  const router=useRouter();

  const handleToggleSave = async (e) => {};

  return (
    <Card className="overflow-hidden hover:shadow-lg transition group">
      <div className="relative h-48">
        {car.images && car.images.length > 0 ? (
          <div className="relative w-full h-full">
            <img
              src={car.images[0]}
              alt={`${car.make} ${car.model}`}
              fill=""
              className="object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <CarIcon className="h-12 w-12 text-gray-400"></CarIcon>
          </div>
        )}

        <Button
          variant={"ghost"}
          size="icon"
          className={`absolute top-2 right-2 bg-white/80 hover:bg-white p-1.5"
                ${isSaved ? "text-red-500 " : "text-grey-400"}`}
          onClick={handleToggleSave}
        >
          <Heart className={isSaved ? "fill-current" : " "} size={20} />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="flex flex-col mb-2">
          <h3 className="text-lg font-bold line-clamp-1">
            {car.make} {car.model}
          </h3>
          <span className="text-xl font-bold text-blue-600">
            ${car.price.toLocaleString()}
          </span>
        </div>

        <div className="text-gray-600 mb-2 flex items-center">
          <span> {car.year}</span>
          <span className="mx-2">.</span>
          <span>{car.transmission}</span>
          <span className="mx-2">.</span>
          <span>{car.fuelType}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          <Badge variant="outline" className="bg-grey-50">
            {car.bodyType}
          </Badge>
          <Badge variant="outline" className="bg-grey-50">
            {car.mileage.toLocaleString()}
          </Badge>
          <Badge variant="outline" className="bg-grey-50">
            {car.color}
          </Badge>
        </div>


        <div>
            <Button className="flex-1" onClick={()=>router.push(`/cars/${car.id}`)}>View Car</Button>
        </div>


      </CardContent>
    </Card>
  );
};

export default CarCard;
