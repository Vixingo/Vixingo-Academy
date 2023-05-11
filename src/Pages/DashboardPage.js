import React from "react";
import { Box } from "@mui/material";
import AdminNav from "../components/Navbar/AdminNav";
import SimplePromo from "../components/Hero/SimplePromo";
import LeadTable from "../components/Tables/LeadTable";

function DashboardPage() {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <AdminNav />
                <Box sx={{ alignItems: "center", flex: "1", p: 3 }}>
                    <LeadTable />
                </Box>
            </Box>
        </>
    );
}

export default DashboardPage;
