/** @jsxImportSource theme-ui */

import React from "react"
import { Box } from "theme-ui"

interface FilterDropdownProps {
    props: string[]
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ props }) => {
    return (
        <Box
            sx={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                top: "36px",
                left: "0px",
                width: "200px",
                borderRadius: "4px",
                background: "#fff",
                zIndex: 1,
                boxShadow: "2px 3px 14px 0px rgba(0, 0, 0, 0.16)",
            }}>
            {props.map((item, index) => (
                <label
                    key={index}
                    sx={{
                        display: "flex",
                        height: "40px",
                        px: "16px",
                        py: "8px",
                        maxWidth: "100%",
                        alignItems: "center",
                    }}>
                    {item}
                    <input
                        type="checkbox"
                        value={item}
                        //   checked={selectedCategories.includes(item)}
                        //   onChange={() => handleCategoryChange(item)}
                        sx={{
                            marginLeft: "auto",
                            width: "14px",
                            height: "14px",
                            accentColor: "#E4E9EF",
                            filter: "sepia(100%)",
                        }}
                    />
                </label>
            ))}
        </Box>
    )
}

export default FilterDropdown
