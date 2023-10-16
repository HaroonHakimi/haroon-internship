import React from "react";
import Skeleton from "./Skeleton";

function NftCardSkeleton() {
  return new Array(4).fill(0).map((_, index) => (
    <div key={index}>
      <div className="nft__item">
        <div>
          <Skeleton width={"50px"} height={"50px"} borderRadius={"25%"} />
        </div>
        <div>
          <Skeleton width={"220px"} height={"229px"} borderRadius={"5px"} />
        </div>
        <div className="nft__item_info">
          <div className="">
            <Skeleton width={"229px"} height={"18px"} borderRadius={"5px"} />
          </div>
          <div>
            <Skeleton width={"229px"} height={"26px"} borderRadius={"5px"} />
          </div>
        </div>
      </div>
    </div>
  ));
}

export default NftCardSkeleton;
