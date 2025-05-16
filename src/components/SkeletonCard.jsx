import React from "react";
import { Skeleton } from "./ui/skeleton";
import { Card, CardHeader, CardContent, CardDescription } from "./ui/card";

const SkeletonCard = () => {
  return (
    <div>
      <Card className="p-2 pb-8 md:h-[600px]">
        <Skeleton className="h-[70%] w-[100%] self-end " />

        <CardHeader>
          <Skeleton className="h-10 w-[40%] self-end " />

          <CardDescription>
            <Skeleton className="h-20 w-[30%] self-end " />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-5 w-[30%] self-end " />
        </CardContent>
      </Card>
    </div>
  );
};

export default SkeletonCard;
