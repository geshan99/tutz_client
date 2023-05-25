import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Box, Rating } from "@mui/material";
import rating from "@/data/ratings";

const StyledAvatar = styled(Avatar)(() => ({
  backgroundColor: "green",
}));

function Ratings() {
  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Ratings and Reviews
      </Typography>

      <List sx={{ width: "100%" }}>
        {rating.map((rating) => {
          return (
            <ListItem
              alignItems="flex-start"
              sx={{ padding: "0px" }}
              key={rating.id}
            >
              <ListItemAvatar>
                <StyledAvatar>
                  {rating.clientName.slice(0, 1).toUpperCase()}
                </StyledAvatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <Box
                      sx={{
                        display: { md: "flex", xs: "block" },

                        alignItems: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        {rating.clientName}
                      </Typography>
                      <Rating
                        name="read-only"
                        size="small"
                        value={rating.rating}
                        readOnly
                        sx={{
                          mx: { md: "15px", xs: "0px" },
                        }}
                      />
                      <Typography variant="subtitle1">
                        {rating.rating}
                      </Typography>
                    </Box>
                  </>
                }
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="#6C6E74"
                    >
                      {rating.description}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default Ratings;
