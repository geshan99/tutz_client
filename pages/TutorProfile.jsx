import ProfileView from "@/components/ProfileView";
import ProfileInfo from "@/components/ProfileInfo";
import styled from "@emotion/styled";
import { Box, Grid, Paper, Typography } from "@mui/material";
import CourseCard from "@/components/CourseCard";
import Ratings from "@/components/Ratings";
import data from "@/data/tutorprofile";

const Item = styled(Paper)(() => ({
  border: "1px solid #D9DEE8",
  borderRadius: "16px",
  elevation: 2,
  justifyContent: "center",
  align: "center",
}));
const sponsored = false;

function TutorProfile() {
  return (
    <>
      <Box sx={{ marginTop: "50px", marginX: "60px" }}>
        <Grid container spacing={4} direction="row" justifyContent="center">
          <Grid item md={4}>
            <Item sx={{ padding: "32px ", backgroundColor: "#ffffff" }}>
              <ProfileView />
            </Item>
          </Grid>
          <Grid item md={8}>
            {data.map((data) => {
              return (
                <Item
                  sx={{
                    padding: data.sponsored ? "12px 22px 22px 22px" : "22px",
                    backgroundColor: data.sponsored ? "#FFE1E1" : "#ffffff",
                    marginBottom: "10px",
                  }}
                  key={data.id}
                >
                  <CourseCard data={data} />
                </Item>
              );
            })}
            {/* item should loop */}

            <Item sx={{ padding: "22px ", backgroundColor: "#ffffff" }}>
              <Ratings />
            </Item>
          </Grid>
          {/* <Grid item md={12}>
            <Grid
              container
              spacing={4}
              direction="row"
              justifyContent="flex-end"
            >
              <Grid item md={8}></Grid>
            </Grid>
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
}

export default TutorProfile;
