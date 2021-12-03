import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import {
  Highlight,
  connectHits,
  Configure,
  Pagination,
} from "react-instantsearch-dom";

// Import framer notion anim library
import { motion, AnimateSharedLayout } from "framer-motion";
import { getHits } from "../../actions/getHits";


const HitsComponent = () => {
  return (
    <div className="hits-container">
      <Configure
        hitsPerPage={21}
        // userToken={persona}
        // filters={shop ? `shop_availability:'${shop}'` : ''}
      />
      <CustomHits />
      <Pagination />
    </div>
  );
};

export default HitsComponent;

const Hits = ({ hits }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHits(hits))
  }, [hits])

 

  const listItem = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
      },
    },
  };
  return (
    <AnimateSharedLayout>
      <div className="hits-wrapper">
        <ul className="hits-list">
          {hits.map((hit) => (
            <motion.li
              key={hit.objectID}
              variants={listItem}
              initial="hidden"
              animate="show"
              className="hit-list"
              onClick={() => {}}
            >
              <div className="weight__wrapper">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6186 2.29584C11.6186 1.77419 11.1964 1.35233 10.6758 1.35233H4.32438C3.80347 1.35233 3.38086 1.77421 3.38086 2.29584V3.08184H11.6184L11.6186 2.29584Z"
                    fill="#B7B4B4"
                  />
                  <path
                    d="M12.1006 4.57005L11.6321 3.71057H3.3695L2.89966 4.57005V5.39655C2.89966 5.73221 3.03057 6.03439 3.239 6.26466V10.3335C3.239 10.5071 3.37963 10.6477 3.55366 10.6477H11.4477C11.621 10.6477 11.7624 10.5071 11.7624 10.3335V6.26466C11.9705 6.03439 12.1002 5.7318 12.1002 5.39655V4.57005H12.1006ZM3.86769 6.64712C3.97341 6.67558 4.08365 6.69508 4.19842 6.69508C4.66415 6.69508 5.06954 6.44799 5.2994 6.07936C5.47342 6.35911 5.74865 6.5687 6.07569 6.65349V10.0188H3.86769V6.64712ZM6.70419 10.0187V6.65676C7.0391 6.57574 7.32294 6.36463 7.49999 6.07929C7.72908 6.44751 8.13447 6.69501 8.60137 6.69501C9.06678 6.69501 9.47217 6.44792 9.70201 6.07929C9.93078 6.44751 10.3357 6.69501 10.8022 6.69501C10.9173 6.69501 11.0269 6.67551 11.1337 6.64705V10.0186L6.70419 10.0187Z"
                    fill="#B7B4B4"
                  />
                  <path
                    d="M5.77064 8.20091C5.77064 8.44717 5.571 8.64682 5.32481 8.64682C5.07856 8.64682 4.87891 8.44718 4.87891 8.20091C4.87891 7.95465 5.07854 7.755 5.32481 7.755C5.57098 7.755 5.77064 7.95464 5.77064 8.20091Z"
                    fill="#B7B4B4"
                  />
                </svg>
                <p className="weight__text">
                  <Highlight hit={hit} attribute="StoreName" />
                </p>
              </div>
              <div className="infos">
                <h3>
                  <Highlight hit={hit} attribute="Sku" />
                </h3>
                <p>{hit.Address1}</p>
                <p>{hit.Address2}</p>
                <div className="stock">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.715 6.68515C19.8864 6.56618 20.1136 6.56618 20.285 6.68515L21.5 7.54006V2.50012H18.5V7.54006L19.715 6.68515Z"
                      fill="#B7B4B4"
                    />
                    <path
                      d="M22.5 2.5V8.5C22.5005 8.68728 22.3962 8.85893 22.2299 8.9451C22.159 8.98148 22.0799 9.00023 22 9.00001C21.898 8.99978 21.7987 8.96831 21.715 8.91005L20 7.70491L18.285 8.90982V8.91005C18.1366 9.01049 17.946 9.02366 17.785 8.94509C17.6129 8.86317 17.5025 8.69063 17.5 8.5V2.5H13V15.5H27V2.5L22.5 2.5Z"
                      fill="#B7B4B4"
                    />
                    <path
                      d="M12.2149 20.6851C12.3864 20.5662 12.6136 20.5662 12.785 20.6851L14 21.54V16.5001H11V21.54L12.2149 20.6851Z"
                      fill="#B7B4B4"
                    />
                    <path
                      d="M15 16.5V22.5C15.0005 22.6873 14.8962 22.8589 14.7299 22.9451C14.659 22.9815 14.5799 23.0002 14.5 23C14.398 22.9998 14.2987 22.9683 14.215 22.9101L12.5 21.7049L10.785 22.9098V22.91C10.6366 23.0105 10.446 23.0237 10.285 22.9451C10.1129 22.8632 10.0025 22.6906 10 22.5V16.5H5.5V29.5H19.5V16.5L15 16.5Z"
                      fill="#B7B4B4"
                    />
                    <path
                      d="M27.215 20.6851C27.3864 20.5662 27.6136 20.5662 27.785 20.6851L29 21.54V16.5001H26V21.54L27.215 20.6851Z"
                      fill="#B7B4B4"
                    />
                    <path
                      d="M30.0001 16.5V22.5C30.0005 22.6873 29.8963 22.8589 29.73 22.9451C29.659 22.9815 29.58 23.0002 29.5001 23C29.398 22.9998 29.2987 22.9683 29.215 22.9101L27.5 21.7049L25.7851 22.9098V22.91C25.6366 23.0105 25.446 23.0237 25.2851 22.9451C25.113 22.8632 25.0025 22.6906 25 22.5V16.5H20.5V29.5H34.5V16.5L30.0001 16.5Z"
                      fill="#B7B4B4"
                    />
                  </svg>
                  <p>{hit.sku_physicalShops_stock}</p>
                </div>
              </div>
              <div className="phone">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9806 3.18351C14.2801 2.05071 13.038 1.36699 11.7063 1.38082H9.25425C8.21722 1.38216 7.22299 1.79466 6.48951 2.52791C5.75625 3.26116 5.34374 4.25556 5.34265 5.29265V26.5669C5.34377 27.6042 5.75627 28.5986 6.48951 29.3319C7.22277 30.0654 8.21717 30.4779 9.25425 30.4792H11.7063C13.0384 30.4939 14.2812 29.8098 14.9815 28.6763H33.9906C34.3587 28.6763 34.6571 28.3779 34.6571 28.0098V3.85036C34.6571 3.67357 34.587 3.50394 34.462 3.37894C34.3368 3.25394 34.1674 3.18362 33.9906 3.18362L14.9806 3.18351ZM11.7063 29.1458H9.25425C8.56831 29.1532 7.90802 28.884 7.42277 28.3987C6.93772 27.9134 6.66854 27.2532 6.67591 26.567V5.29271C6.66854 4.60653 6.93774 3.94648 7.42277 3.46122C7.90803 2.97618 8.56831 2.70676 9.25425 2.71436H11.7063C12.1853 2.70722 12.6563 2.8387 13.0623 3.09316C13.4683 3.34762 13.792 3.7139 13.9946 4.1483C14.1767 4.50276 14.2761 4.8943 14.2848 5.2927V26.567C14.2752 26.9717 14.1732 27.3688 13.9868 27.7279C13.7832 28.1585 13.4598 28.5212 13.0553 28.7728C12.6506 29.0241 12.1823 29.1538 11.7062 29.1457L11.7063 29.1458ZM33.3234 27.3431H15.5308C15.5478 27.2665 15.5572 27.19 15.5692 27.1136C15.5764 27.069 15.5862 27.0244 15.5915 26.9799C15.6085 26.8429 15.6172 26.7052 15.6179 26.567V5.29271C15.6172 5.15521 15.6085 5.01771 15.5918 4.8811C15.586 4.83132 15.5748 4.78177 15.5668 4.73199C15.5552 4.66034 15.5467 4.58891 15.5308 4.51704H33.3234V27.3431Z"
                    fill="#B7B4B4"
                  />
                  <path
                    d="M19.9875 13.2766H28.4195C29.5338 13.2766 30.5633 12.6822 31.1204 11.7174C31.6776 10.7524 31.6776 9.56365 31.1204 8.59868C30.5633 7.63371 29.5338 7.03931 28.4195 7.03931H19.9875C18.8734 7.03931 17.8437 7.63371 17.2866 8.59868C16.7297 9.56365 16.7297 10.7524 17.2866 11.7174C17.8437 12.6822 18.8734 13.2766 19.9875 13.2766ZM19.9875 8.37256L28.4195 8.37279C29.0575 8.37279 29.6468 8.71296 29.9658 9.26542C30.2847 9.81765 30.2847 10.4982 29.9658 11.0507C29.6468 11.6031 29.0575 11.9433 28.4195 11.9433H19.9875C19.3498 11.9433 18.7602 11.6031 18.4415 11.0507C18.1225 10.4982 18.1225 9.81764 18.4415 9.26542C18.7603 8.71296 19.3498 8.37279 19.9875 8.37279V8.37256Z"
                    fill="#B7B4B4"
                  />
                  <path
                    d="M20.1166 15.5H20.7474C21.1155 15.5 21.4141 15.8681 21.4141 16.1667V16.7975C21.4141 17.1656 21.1157 17.4643 20.7474 17.4643H20.1166C19.7485 17.4643 19.4498 17.0962 19.4498 16.7975V16.1667C19.4498 15.7987 19.7483 15.5 20.1166 15.5Z"
                    fill="#B7B4B4"
                  />
                  <path
                    d="M23.9755 15.5H24.6063C24.9743 15.5 25.273 15.8681 25.273 16.1667V16.7975C25.273 17.1656 24.9746 17.4643 24.6063 17.4643H23.9755C23.6074 17.4643 23.3087 17.0962 23.3087 16.7975V16.1667C23.3087 15.7987 23.6072 15.5 23.9755 15.5Z"
                    fill="#B7B4B4"
                  />
                  <path
                    d="M27.8342 15.5H28.4655C28.8336 15.5 29.1323 15.8681 29.1323 16.1667V16.7975C29.1323 17.1656 28.8338 17.4643 28.4655 17.4643H27.8342C27.4661 17.4643 27.1675 17.0962 27.1675 16.7975V16.1667C27.1675 15.7987 27.4659 15.5 27.8342 15.5Z"
                    fill="#B7B4B4"
                  />
                  <path
                    d="M20.1166 19.2566H20.7474C21.1155 19.2566 21.4141 19.6247 21.4141 19.9233V20.5546C21.4141 20.9227 21.1157 21.2213 20.7474 21.2213H20.1166C19.7485 21.2213 19.4498 20.8533 19.4498 20.5546V19.9233C19.4498 19.5553 19.7483 19.2566 20.1166 19.2566Z"
                    fill="#B7B4B4"
                  />
                  <path
                    d="M23.9755 19.2566H24.6063C24.9743 19.2566 25.273 19.6247 25.273 19.9233V20.5546C25.273 20.9227 24.9746 21.2213 24.6063 21.2213H23.9755C23.6074 21.2213 23.3087 20.8533 23.3087 20.5546V19.9233C23.3087 19.5553 23.6072 19.2566 23.9755 19.2566Z"
                    fill="#B7B4B4"
                  />
                  <path
                    d="M27.8342 19.2566H28.4655C28.8336 19.2566 29.1323 19.6247 29.1323 19.9233V20.5546C29.1323 20.9227 28.8338 21.2213 28.4655 21.2213H27.8342C27.4661 21.2213 27.1675 20.8533 27.1675 20.5546V19.9233C27.1675 19.5553 27.4659 19.2566 27.8342 19.2566Z"
                    fill="#B7B4B4"
                  />
                  <path
                    d="M20.1166 23.0137H20.7474C21.1155 23.0137 21.4141 23.3818 21.4141 23.6805V24.3113C21.4141 24.6794 21.1157 24.978 20.7474 24.978H20.1166C19.7485 24.978 19.4498 24.6099 19.4498 24.3113V23.6805C19.4498 23.3124 19.7483 23.0137 20.1166 23.0137Z"
                    fill="#B7B4B4"
                  />
                  <path
                    d="M23.9755 23.0137H24.6063C24.9743 23.0137 25.273 23.3818 25.273 23.6805V24.3113C25.273 24.6794 24.9746 24.978 24.6063 24.978H23.9755C23.6074 24.978 23.3087 24.6099 23.3087 24.3113V23.6805C23.3087 23.3124 23.6072 23.0137 23.9755 23.0137Z"
                    fill="#B7B4B4"
                  />
                  <path
                    d="M27.8342 23.0137H28.4655C28.8336 23.0137 29.1323 23.3818 29.1323 23.6805V24.3113C29.1323 24.6794 28.8338 24.978 28.4655 24.978H27.8342C27.4661 24.978 27.1675 24.6099 27.1675 24.3113V23.6805C27.1675 23.3124 27.4659 23.0137 27.8342 23.0137Z"
                    fill="#B7B4B4"
                  />
                </svg>
                <p>{hit.Phone}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </AnimateSharedLayout>
  );
};

const CustomHits = connectHits(Hits);
