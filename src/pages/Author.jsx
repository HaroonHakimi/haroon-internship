import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import axios from "axios";
import Skeleton from "../components/UI/Skeleton";

const Author = () => {
  const { id } = useParams();
  const [authorData, setAuthorData] = useState([]);
  const [authorItemsData, setAuthorsItemData] = useState([])
  const [loading, setLoading] = useState(true);
  const [followers,setFollowers] = useState(0)
  const [followed, setFollowed] = useState(false)

  async function fetchData() {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`
    );
    setAuthorData(data);
    setAuthorsItemData(data.nftCollection)
    setLoading(false);
    setFollowers(authorData.followers)
  }

  useEffect(() => {
    fetchData();
  }, []);

  function addFollowers()
  {
    setFollowed(true)

    if (!followed)
    {
      setFollowers(followers + 1)
    }
  }

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {loading && authorData === 0
                  ? new Array(2).fill(0).map(() => (
                      <div className="d_profile de-flex">
                        <div className="de-flex-col">
                          <div className="profile_name">
                            <Skeleton width={"1116px"} height={"150px"} />
                          </div>
                        </div>
                        <div className="profile_follow de-flex">
                        <div className="de-flex-col">
                        <Skeleton width={"230px"} height={"24px"} />
                        </div>
                        </div>
                      </div>
                    ))
                  : authorData.map((author) => (
                      <div className="d_profile de-flex">
                        <div className="de-flex-col">
                          <div className="profile_avatar">
                            <img src={author.authorImage} alt="" />

                            <i className="fa fa-check"></i>
                            <div className="profile_name">
                              <h4>
                                Monica Lucas
                                <span className="profile_username">
                                  @{author.tag}
                                </span>
                                <span id="wallet" className="profile_wallet">
                                  {author.address}
                                </span>
                                <button id="btn_copy" title="Copy Text">
                                  Copy
                                </button>
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="profile_follow de-flex">
                          <div className="de-flex-col">
                            <div className="profile_follower">
                              {author.followers} followers
                            </div>
                            <Link to="#" className="btn-main followers" onClick={addFollowers}>
                              Follow
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems info={setAuthorsItemData}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;

