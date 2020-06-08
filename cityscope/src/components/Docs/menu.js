import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DescriptionIcon from "@material-ui/icons/Description";
import Divider from "@material-ui/core/Divider";

import { AppContext } from "./provider";
import HomeIcon from "@material-ui/icons/Home";

function MainListItems() {
    const { setContentUrl } = useContext(AppContext);
    const changeContentUrl = (url) => {
        setContentUrl(url);
    };
    return (
        <div>
            <ListItem
                button
                onClick={() => {
                    changeContentUrl("README.md");
                }}
            >
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>

            <Divider />

            <ListItem>
                <ListItemText>
                    <h2>General</h2>
                </ListItemText>
            </ListItem>

            {/*  */}
            <ListItem
                button
                onClick={() => {
                    changeContentUrl("./docs/md/schema_archive.md");
                }}
            >
                <ListItemIcon>
                    <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary="(archive) schema" />
            </ListItem>
            {/*  */}
            <ListItem
                button
                onClick={() => {
                    changeContentUrl("./docs/md/specs_archive.md");
                }}
            >
                <ListItemIcon>
                    <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary="(archive) specs" />
            </ListItem>
            {/*  */}
            <ListItem
                button
                onClick={() => {
                    changeContentUrl("./docs/md/licences.md");
                }}
            >
                <ListItemIcon>
                    <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary="licences" />
            </ListItem>
            {/*  */}
            <ListItem
                button
                onClick={() => {
                    changeContentUrl("./docs/md/opensource.md");
                }}
            >
                <ListItemIcon>
                    <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary="open-source" />
            </ListItem>

            <Divider />

            <ListItem>
                <ListItemText>
                    <h2>CityScopeJS</h2>
                </ListItemText>
            </ListItem>

            {/*  */}
            <ListItem
                button
                onClick={() => {
                    changeContentUrl(
                        "https://raw.githubusercontent.com/CityScope/CS_cityscopeJS/master/README.md"
                    );
                }}
            >
                <ListItemIcon>
                    <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary="CSjs" />
            </ListItem>
        </div>
    );
}

export { MainListItems };