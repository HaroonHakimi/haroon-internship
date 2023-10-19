import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";

function NftCard({ nftInfo }) {
  return (
    <div
      className="nft__item"
      data-aos="fade-in"
      data-aos-delay="100"
      data-aos-duration="800"
    >
      <div className="author_list_pp">
        <Link
          to={`/author/${nftInfo.authorId}`}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        >
          <img className="lazy" src={nftInfo.authorImage} alt="" />
          <i className="fa fa-check"></i>
        </Link>
      </div>
      <Timer nftInfo={nftInfo} />

      <div className="nft__item_wrap">
        <div className="nft__item_extra">
          <div className="nft__item_buttons">
            <button>Buy Now</button>
            <div className="nft__item_share">
              <h4>Share</h4>
              <a href="" target="_blank" rel="noreferrer">
                <i className="fa fa-facebook fa-lg"></i>
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <i className="fa fa-twitter fa-lg"></i>
              </a>
              <a href="">
                <i className="fa fa-envelope fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <Link to={`/item-details/${nftInfo.nftId}`}>
          <img
            src={nftInfo.nftImage}
            className="lazy nft__item_preview"
            alt=""
          />
        </Link>
      </div>
      <div className="nft__item_info">
        <Link to={`/item-details/${nftInfo.nftId}`}>
          <h4>{nftInfo.title}</h4>
        </Link>
        <div className="nft__item_price">{nftInfo.price} ETH</div>
        <div className="nft__item_like">
          <i className="fa fa-heart"></i>
          <span>{nftInfo.likes}</span>
        </div>
      </div>
    </div>
  );
}

export default NftCard;
