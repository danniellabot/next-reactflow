import { Box } from "@mui/material";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import Sidebar from "../Sidebar";

export default function Layout({ children }) {
  
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <ResponsiveAppBar />
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>

      </Box>
    </>
  );
}
