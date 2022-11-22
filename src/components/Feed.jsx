import { ExpandMore, Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material'
import React from 'react'
import Post from './Post'
import zugspitze from "../assets/zugspitze.jpg"
import nature from "../assets/nature.jpg"
import canada from "../assets/canada.jpg"


const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post picture={zugspitze} />
      <Post picture={nature} />
      <Post picture={canada} />
    </Box>
  )
}

export default Feed
