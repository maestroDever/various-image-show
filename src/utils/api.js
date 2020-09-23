import axios from "axios";
import { GETALLIMAGES, GETIMAGEDETAIL } from "./endpoints";

export const getAllImages = async () => {
  const { data } = await axios({
    url: GETALLIMAGES,
    method: "GET"
  });

  return data;
};

export const getImageDetail = async id => {
  const { data } = await axios({
    url: `${GETIMAGEDETAIL}/${id}`,
    method: "GET"
  });

  return data;
};
