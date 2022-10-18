import { Grid, Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import Registration from "./auth/Registration";
import UserLogin from "./auth/UserLogin";

const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div role='tabpanel' hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}
const LoginReg = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return <>
        <Grid container>
            <Grid item lg={12} sm={12} xs={12}>
                <Box>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} textColor="secondary" indicatorColor="secondary" onChange={handleChange}>
                            <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                            <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <UserLogin />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Registration />
                    </TabPanel>
                </Box>
            </Grid>
        </Grid>
    </>;
};

export default LoginReg;
