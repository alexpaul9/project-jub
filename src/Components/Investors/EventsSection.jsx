import React, { useState } from "react";
import eventsData from "@data/investors/eventsData";
import {
    Box,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
} from "@mui/material";

const publications = [
    "Investor Day 2025 Webcast",
    "Investor Day 2025 Presentations",
    "Building a Unique Platform",
    "Post-Acquisition Update on Turkey and Bangladesh",
    "Corporate Presentation",
];

const EventsSection = () => {
    const [filter, setFilter] = useState("All");

    const categories = ["All", ...new Set(eventsData.map(e => e.category))];

    const sortedEvents = [...eventsData]
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .filter(event => filter === "All" || event.category === filter);

    const formatDate = dateStr => {
        const date = new Date(dateStr);
        return {
            day: date.getDate().toString().padStart(2, "0"),
            monthYear: date.toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
            }),
        };
    };

    return (
        <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap={4}
            py={8}
            bgcolor="#0c223b"
            color="white"
            borderRadius={4}
        >
            {/* Left Publication List */}
            <Box
                flex={1}
                bgcolor="#245777"
                p={4}
                borderRadius={3}
                minWidth={250}
            >
                <Typography variant="h6" mb={3}>
                    Select Events & Publications
                </Typography>
                {publications.map((item, index) => (
                    <Button
                        key={index}
                        fullWidth
                        sx={{
                            mb: 1,
                            justifyContent: "flex-start",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "#1e3c5d",
                            },
                            textTransform: "none",
                            fontWeight: 400,
                            pl: 2,
                            pr: 2,
                        }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            width="100%"
                            textAlign="left"
                            gap={1.5}
                        >
                            <span style={{ fontSize: "1rem" }}>{">"}</span>
                            <Typography
                                variant="body1"
                                sx={{ flex: 1, textAlign: "left", color: "white" }}
                            >
                                {item}
                            </Typography>
                        </Box>
                    </Button>
                ))}

            </Box>

            {/* Center - Upcoming Events */}
            <Box flex={2}>
                <div></div>
                <h3 className="text-3xl font-thin">
                Upcoming Events
                </h3>
                <Box
                    sx={{
                        maxHeight: 300,
                        overflowY: "auto",
                        pr: 1,
                        '&::-webkit-scrollbar': {
                            width: '8px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#888',
                            borderRadius: '8px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            background: '#555',
                        },
                    }}
                >
                    {sortedEvents.map((event, idx) => {
                        const { day, monthYear } = formatDate(event.date);
                        return (
                            <Box
                                key={idx}
                                display="flex"
                                alignItems="center"
                                gap={2}
                                bgcolor="#082136"
                                p={2}
                                borderRadius={2}
                                mb={2}
                            >
                                <Box textAlign="center" width={80}>
                                    <Typography fontSize={50} fontWeight={300}>
                                        {day}
                                    </Typography>

                                    <Typography fontSize={14} color="skyblue">
                                        {monthYear}
                                    </Typography>
                                </Box>
                                <Typography fontWeight={600}>{event.title}</Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Box>

            {/* Right Filter */}
            <Box flex={1} minWidth={150}>
                <FormControl fullWidth variant="outlined" size="small">
                    <Select
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                        displayEmpty
                        sx={{
                            backgroundColor: "#4ac9f6",
                            color: "#0c223b",
                            borderRadius: "15px",
                            fontWeight: 400,
                            fontSize: "1.1rem",
                            px: 2,
                            py: 0,
                            minHeight: "20px",                   // Compact height
                            alignSelf: "center",                 // Keeps it vertically centered
                            ".MuiOutlinedInput-notchedOutline": { border: "none" },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
                            ".MuiSvgIcon-root": { color: "#0c223b", fontSize: "1.2rem" },
                        }}
                    >
                        {categories.map((cat, idx) => (
                            <MenuItem key={idx} value={cat}>
                                {cat === "All" ? "All events" : cat}
                            </MenuItem>
                        ))}
                    </Select>

                </FormControl>
            </Box>
        </Box>
    );
};

export default EventsSection;
