"use client"
import React from 'react'
import { List, ListItem, ListItemText, Box, Input, InputBase, useAutocomplete, Paper, ListItemButton } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { styled, alpha } from '@mui/material/styles';

const items = [
    {
        title: "Abc bdjj",
        description: "jbgdjgjf",
        available: true,
        id: 1
    },
    {
        title: "bdjj",
        description: "jbgdjgjf",
        available: true,
        id: 2
    },
    {
        title: "kjhjksf",
        description: "jbgdjgjf",
        available: true,
        id: 3
    },
    {
        title: "kjdhjdhj",
        description: "jbgdjgjf",
        available: true,
        id: 4
    }
]

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',

    },
}));


function SearchBar(params) {
    const [value, setValue] = React.useState(null)
    const [options, setOptions] = React.useState()
    const [inputValue, setInputValue] = React.useState('')

    const { getRootProps, getInputProps,
        getListboxProps, getOptionProps,
        groupedOptions } = useAutocomplete({
            id: "search-field",
            options: items,
            freeSolo: true,
            getOptionLabel: (option) => option.title
        })

    return (
        <Box flexGrow={1}>
            <Search {...getRootProps()}>
                <StyledInputBase fullWidth

                    placeholder="Search books, journals & magazines"
                    {...getInputProps()} startAdornment={
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                    } {...params} />
            </Search>
            {
                groupedOptions.length > 0 ? (
                    <Paper sx={{ width: "100%" }} elevation={2}>
                        <List sx={{
                            overflow: "auto", zIndex: 1,
                            position: 'absolute', bgcolor: "background.paper",
                            width: "70vw"
                        }} {...getListboxProps()}>
                            {
                                groupedOptions.map((option, index) => (
                                    <ListItem {...getOptionProps({ option, index })}>
                                        <ListItemButton component="span">
                                            <ListItemText primary={option.title} />
                                        </ListItemButton>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Paper>
                ) : null
            }
        </Box>

    )
}



export default SearchBar