import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  if(!image){
    image = "defaultuser.png";
  }
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://social-media-liart-eta.vercel.app/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
