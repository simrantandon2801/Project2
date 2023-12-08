import { Box } from "@mui/material";
import { Api_url } from "helper";
const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${Api_url}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
