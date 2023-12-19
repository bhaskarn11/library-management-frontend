"use client"

import { AppBar, Toolbar } from "@mui/material"
// import { Search as SearchIcon, Notifications, NotificationsNone } from "@mui/icons-material"
import AccountFlayout from './AccountFlayout'
import SearchBar from './SearchBar'

import BrandLogo from "@/app/common/components/BrandLogo"



function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <BrandLogo />
        <SearchBar />
        <AccountFlayout />
      </Toolbar>
    </AppBar>
  )
}

export default NavBar