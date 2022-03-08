(function(){
    var script = {
 "definitions": [{
 "id": "ImageResource_455B5DE7_507C_2492_41D3_4D2AFD6D17D7",
 "levels": [
  {
   "url": "media/zoomImage_454F44EC_507C_6497_41C0_5B6A48C0FECA_0_0.jpg",
   "width": 1559,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_454F44EC_507C_6497_41C0_5B6A48C0FECA_0_1.jpg",
   "width": 1023,
   "height": 709,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_454F44EC_507C_6497_41C0_5B6A48C0FECA_0_2.jpg",
   "width": 511,
   "height": 354,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "ImageResource"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "id": "camera_796D751D_69DB_7D6F_418F_82EAF13B01CA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_t.jpg",
 "label": "Foto 3",
 "id": "panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5B4D07E9_5004_249E_41CA_40DB9477217F"
  }
 ],
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_5E778E44_500C_6796_4191_B7E341CB5596",
  "this.overlay_5E9750F1_500C_1C8E_41B0_FBF7D30B0748"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_5C2F027E_5004_3C72_41B2_5306B6627537",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5C2F027E_5004_3C72_41B2_5306B6627537_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5B4D07E9_5004_249E_41CA_40DB9477217F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.album_4304188D_501C_EC96_41A1_861E62FBD11E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "class": "PhotoAlbumPlayer"
},
{
 "label": "\u00c1lbum de Fotos Folder 1",
 "thumbnailUrl": "media/album_4304188D_501C_EC96_41A1_861E62FBD11E_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_4304188D_501C_EC96_41A1_861E62FBD11E_AlbumPlayList",
 "id": "album_4304188D_501C_EC96_41A1_861E62FBD11E"
},
{
 "duration": 500,
 "id": "FadeInEffect_455B7DE7_507C_2492_41CB_096E26B22112",
 "easing": "cubic_in",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -74.2,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "id": "camera_7914D567_69DB_7DDC_41D2_A8B63FA1F1B1",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 91.1,
  "class": "PanoramaCameraPosition",
  "pitch": -5.14
 },
 "id": "camera_7904758E_69DB_7D6C_41C7_EB3DCE9D5DD2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "duration": 5000,
 "label": "Folder 2",
 "id": "album_4304188D_501C_EC96_41A1_861E62FBD11E_1",
 "thumbnailUrl": "media/album_4304188D_501C_EC96_41A1_861E62FBD11E_1_t.jpg",
 "class": "Photo",
 "width": 627,
 "image": {
  "levels": [
   {
    "url": "media/album_4304188D_501C_EC96_41A1_861E62FBD11E_1.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 880
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 82.29,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "id": "camera_792BC5CD_69DB_7CEF_41CC_85B53881FED6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "duration": 5000,
 "label": "Folder 1",
 "id": "album_4304188D_501C_EC96_41A1_861E62FBD11E_0",
 "thumbnailUrl": "media/album_4304188D_501C_EC96_41A1_861E62FBD11E_0_t.jpg",
 "class": "Photo",
 "width": 902,
 "image": {
  "levels": [
   {
    "url": "media/album_4304188D_501C_EC96_41A1_861E62FBD11E_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1280
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5C2F027E_5004_3C72_41B2_5306B6627537_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "duration": 3000,
   "targetPitch": 0,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_t.jpg",
 "label": "Foto 4",
 "id": "panorama_5B4D07E9_5004_249E_41CA_40DB9477217F",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E"
  }
 ],
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_5F11F591_500C_248E_41B7_931C7658886D",
  "this.overlay_5F7BC2C2_500C_1C93_41C2_73E26AB3F72D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_t.jpg",
 "label": "Foto 2",
 "id": "panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C2F027E_5004_3C72_41B2_5306B6627537"
  }
 ],
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_5E02606E_500C_1B92_41AD_8B91D0AB998A",
  "this.overlay_5E301CCE_500D_E492_41C5_62D927701C7C"
 ]
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_t.jpg",
 "label": "Foto 1",
 "id": "panorama_5C2F027E_5004_3C72_41B2_5306B6627537",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00"
  }
 ],
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_5DCC1BD6_500C_2CB2_41D0_CF64288B7494"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_t.jpg",
 "label": "Foto 5",
 "id": "panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5B4D07E9_5004_249E_41CA_40DB9477217F"
  }
 ],
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_5F8ABC3C_5004_2BF6_41B7_D57608861E70"
 ]
},
{
 "id": "audio_5C000412_5109_CD89_41D1_2958BB13B171",
 "audio": {
  "mp3Url": "media/audio_5C000412_5109_CD89_41D1_2958BB13B171.mp3",
  "oggUrl": "media/audio_5C000412_5109_CD89_41D1_2958BB13B171.ogg",
  "class": "AudioResource"
 },
 "autoplay": true,
 "data": {
  "label": "y2meta.com - Uplifting and Inspiring Background Music For Videos & Presentations (128 kbps) (1)"
 },
 "class": "MediaAudio"
},
{
 "items": [
  {
   "media": "this.panorama_5C2F027E_5004_3C72_41B2_5306B6627537",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5C2F027E_5004_3C72_41B2_5306B6627537_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5B4D07E9_5004_249E_41CA_40DB9477217F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 0)",
   "media": "this.album_4304188D_501C_EC96_41A1_861E62FBD11E",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "duration": 500,
 "id": "FadeOutEffect_455B1DE7_507C_2492_41CE_79F9BABE3D5F",
 "easing": "cubic_out",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -2.94
 },
 "id": "camera_79617544_69DB_7DDC_41C6_23797CF8F465",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -72.73,
  "class": "PanoramaCameraPosition",
  "pitch": -8.08
 },
 "id": "camera_793A45AF_69DB_7CAB_41D5_927B6D7B89F6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_rotation"
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "left": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 0.5,
 "minWidth": 100,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "class": "ViewerArea",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "shadow": false,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "minHeight": 50,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "layout": "absolute",
 "data": {
  "name": "--- LEFT PANEL 2"
 },
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543"
 ],
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "width": 330,
 "scrollBarColor": "#000000",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "layout": "absolute",
 "data": {
  "name": "-- SETTINGS"
 },
 "children": [
  "this.Image_425BF7C9_503C_249E_41D0_F8D9F5EF8B4D",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 267.95,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 641,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "0%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_BD15DCC8_9478_145B_41E1_35766BBBD98F",
  "this.Container_BD147CC8_9478_145B_41E1_A1505134A3C3"
 ],
 "id": "Container_BD141CC8_9478_145B_41D4_265F47E47DB6",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_BD141CC8_9478_145B_41D4_265F47E47DB6, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--FLOORPLAN"
 },
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_BD878AD4_9478_3C4B_41E0_1542ED46C5EC",
  "this.Container_BD84CAD4_9478_3C4B_41DB_EAABF4EA300E"
 ],
 "id": "Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "UIComponent2951"
 },
 "id": "veilPopupPanorama",
 "left": 0,
 "right": 0,
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "class": "UIComponent",
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "paddingTop": 0,
 "minHeight": 0,
 "backgroundOpacity": 0.55,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "right": 0,
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "class": "ZoomImage",
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [],
 "top": 0,
 "paddingTop": 0,
 "minHeight": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage2952"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton2953"
 },
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "fontWeight": "normal",
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "right": 10,
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "fontSize": "1.29vmin",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "class": "CloseButton",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 5,
 "mode": "push",
 "paddingRight": 5,
 "top": 10,
 "label": "",
 "iconLineWidth": 5,
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.3,
 "paddingTop": 5,
 "minHeight": 0,
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 5,
 "textDecoration": "none",
 "layout": "horizontal",
 "shadow": false,
 "fontStyle": "normal",
 "visible": false,
 "cursor": "hand",
 "propagateClick": false,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "iconWidth": 20
},
{
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minWidth": 1,
 "maxWidth": 58,
 "transparencyActive": true,
 "borderSize": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minWidth": 1,
 "maxWidth": 58,
 "transparencyActive": true,
 "borderSize": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00, this.camera_79617544_69DB_7DDC_41C6_23797CF8F465); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.11,
   "pitch": -22.56,
   "yaw": -171.4,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_42B38B0D_5004_2D96_41B3_802D44A703F6",
   "distance": 100
  }
 ],
 "id": "overlay_5E778E44_500C_6796_4191_B7E341CB5596",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 26.11,
   "yaw": -171.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5B4D07E9_5004_249E_41CA_40DB9477217F, this.camera_7914D567_69DB_7DDC_41D2_A8B63FA1F1B1); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.19,
   "pitch": -27.03,
   "yaw": -77.39,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_42B04B0D_5004_2D96_41B9_EF2277135916",
   "distance": 100
  }
 ],
 "id": "overlay_5E9750F1_500C_1C8E_41B0_FBF7D30B0748",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 25.19,
   "yaw": -77.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "cursor": "hand",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "horizontalAlign": "center",
 "width": "14.22%",
 "minWidth": 50,
 "maxWidth": 60,
 "transparencyActive": false,
 "borderSize": 0,
 "class": "IconButton",
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "paddingTop": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "horizontalAlign": "center",
 "right": 10,
 "width": "14.22%",
 "minWidth": 50,
 "maxWidth": 60,
 "transparencyActive": false,
 "borderSize": 0,
 "class": "IconButton",
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "paddingTop": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "IconButton >"
 }
},
{
 "items": [
  {
   "camera": {
    "easing": "linear",
    "targetPosition": {
     "x": "0.37",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.69"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "media": "this.album_4304188D_501C_EC96_41A1_861E62FBD11E_0",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "easing": "linear",
    "targetPosition": {
     "x": "0.40",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.27"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "media": "this.album_4304188D_501C_EC96_41A1_861E62FBD11E_1",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_4304188D_501C_EC96_41A1_861E62FBD11E_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD, this.camera_793A45AF_69DB_7CAB_41D5_927B6D7B89F6); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.86,
   "pitch": -39.38,
   "yaw": -78.42,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_42B03B0D_5004_2D96_41CA_7310CE2EBE47",
   "distance": 100
  }
 ],
 "id": "overlay_5F11F591_500C_248E_41B7_931C7658886D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.86,
   "yaw": -78.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E, this.camera_792BC5CD_69DB_7CEF_41CC_85B53881FED6); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.42,
   "pitch": -40.75,
   "yaw": 96.61,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_42B0FB0D_5004_2D96_41D4_01B91A488F44",
   "distance": 100
  }
 ],
 "id": "overlay_5F7BC2C2_500C_1C93_41C2_73E26AB3F72D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.42,
   "yaw": 96.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.2,
   "pitch": -31.14,
   "yaw": 2.57,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_42B37B0D_5004_2D96_41B8_7C3B34C6FB8B",
   "distance": 100
  }
 ],
 "id": "overlay_5E02606E_500C_1B92_41AD_8B91D0AB998A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 24.2,
   "yaw": 2.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.14,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5C2F027E_5004_3C72_41B2_5306B6627537, this.camera_796D751D_69DB_7D6F_418F_82EAF13B01CA); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.75,
   "pitch": -32.86,
   "yaw": -179.67,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_42B32B0D_5004_2D96_41C5_0FDBD42E6959",
   "distance": 100
  }
 ],
 "id": "overlay_5E301CCE_500D_E492_41C5_62D927701C7C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 23.75,
   "yaw": -179.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.2,
   "pitch": -31.14,
   "yaw": 2.57,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_42B2FB0D_5004_2D96_41D2_B25FB521F5ED",
   "distance": 100
  }
 ],
 "id": "overlay_5DCC1BD6_500C_2CB2_41D0_CF64288B7494",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 24.2,
   "yaw": 2.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.14,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5B4D07E9_5004_249E_41CA_40DB9477217F, this.camera_7904758E_69DB_7D6C_41C7_EB3DCE9D5DD2); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.94,
   "pitch": -32.17,
   "yaw": 93.17,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_42B15B0D_5004_2D96_41B9_EB42E1C3C549",
   "distance": 100
  }
 ],
 "id": "overlay_5F8ABC3C_5004_2BF6_41B7_D57608861E70",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 23.94,
   "yaw": 93.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "minWidth": 1,
 "maxWidth": 58,
 "transparencyActive": true,
 "borderSize": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "shadow": false,
 "visible": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "minWidth": 1,
 "maxWidth": 58,
 "transparencyActive": true,
 "borderSize": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minWidth": 1,
 "maxWidth": 58,
 "transparencyActive": true,
 "borderSize": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "layout": "absolute",
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "width": 66,
 "scrollBarColor": "#000000",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "absolute",
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "id": "Container_6396DD92_74B8_852E_41C7_7F2F88EAB543",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "Image_425BF7C9_503C_249E_41D0_F8D9F5EF8B4D",
 "width": "85.837%",
 "left": "1.92%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "maxWidth": 1334,
 "url": "skin/Image_425BF7C9_503C_249E_41D0_F8D9F5EF8B4D.png",
 "borderSize": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "20.156%",
 "top": "0%",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 679,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image7402"
 }
},
{
 "layout": "vertical",
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "class": "Container",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "height": "85.959%",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_BD15ECC8_9478_145B_41CB_7D871BE75B47",
  "this.Container_BD158CC8_9478_145B_41B5_3F260A00D36A"
 ],
 "id": "Container_BD15DCC8_9478_145B_41E1_35766BBBD98F",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "shadow": true,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF"
 ],
 "id": "Container_BD147CC8_9478_145B_41E1_A1505134A3C3",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "right",
 "class": "Container",
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "top": "10%",
 "paddingTop": 20,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "layout": "absolute",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "borderSize": 0,
 "class": "Container",
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "shadow": true,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "horizontal",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "shadow": true,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "right",
 "class": "Container",
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "top": "10%",
 "paddingTop": 20,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "layout": "absolute",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "borderSize": 0,
 "class": "Container",
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "shadow": true,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "borderSize": 0,
 "class": "Container",
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "shadow": true,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_BD87BAD4_9478_3C4B_41D2_A8D83FD6CFF3",
  "this.Container_BD875AD4_9478_3C4B_4145_58969FE396D8"
 ],
 "id": "Container_BD878AD4_9478_3C4B_41E0_1542ED46C5EC",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "shadow": true,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1"
 ],
 "id": "Container_BD84CAD4_9478_3C4B_41DB_EAABF4EA300E",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "right",
 "class": "Container",
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "top": "10%",
 "paddingTop": 20,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_1_HS_0_0.png",
   "width": 480,
   "height": 540,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_42B38B0D_5004_2D96_41B3_802D44A703F6",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5B4D72B8_5004_7CFE_41BA_BA2CC568057E_1_HS_1_0.png",
   "width": 480,
   "height": 540,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_42B04B0D_5004_2D96_41B9_EF2277135916",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_1_HS_0_0.png",
   "width": 480,
   "height": 540,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_42B03B0D_5004_2D96_41CA_7310CE2EBE47",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5B4D07E9_5004_249E_41CA_40DB9477217F_1_HS_1_0.png",
   "width": 480,
   "height": 540,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_42B0FB0D_5004_2D96_41D4_01B91A488F44",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_1_HS_0_0.png",
   "width": 480,
   "height": 540,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_42B37B0D_5004_2D96_41B8_7C3B34C6FB8B",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5B492D8A_5004_2492_4187_F1CCF1B82F00_1_HS_1_0.png",
   "width": 480,
   "height": 540,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_42B32B0D_5004_2D96_41C5_0FDBD42E6959",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5C2F027E_5004_3C72_41B2_5306B6627537_1_HS_0_0.png",
   "width": 480,
   "height": 540,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_42B2FB0D_5004_2D96_41D2_B25FB521F5ED",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5B4D6D10_5004_258F_41BA_30529F3A4FDD_1_HS_0_0.png",
   "width": 480,
   "height": 540,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_42B15B0D_5004_2D96_41B9_EB42E1C3C549",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "width": 36,
 "scrollBarColor": "#000000",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "height": "100%",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.4,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "width": 44,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "minWidth": 1,
 "maxWidth": 50,
 "transparencyActive": true,
 "borderSize": 0,
 "class": "IconButton",
 "bottom": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "top": "40%",
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, true, 0, null, null, false)",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 50,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container"
 },
 "children": [
  "this.Image_4199A732_503C_25F2_41C1_D14D7EB70CD3",
  "this.Label_64CE434B_69D7_55D4_41D7_98FB4A2AABF4",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3"
 ],
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "width": 300,
 "scrollBarColor": "#000000",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 40,
 "paddingLeft": 40,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "height": "100%",
 "paddingTop": 40,
 "minHeight": 1,
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 40,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "width": 44,
 "horizontalAlign": "center",
 "right": 9,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "minWidth": 1,
 "maxWidth": 50,
 "transparencyActive": true,
 "borderSize": 0,
 "class": "IconButton",
 "bottom": "40%",
 "verticalAlign": "middle",
 "top": "40%",
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 50,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "minWidth": 1,
 "maxWidth": 58,
 "transparencyActive": true,
 "borderSize": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "minWidth": 1,
 "maxWidth": 58,
 "transparencyActive": true,
 "borderSize": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_BD15FCC8_9478_145B_41DA_B306F52E3FCF"
 ],
 "id": "Container_BD15ECC8_9478_145B_41CB_7D871BE75B47",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "85%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "borderSize": 0,
 "class": "Container",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_BD159CC8_9478_145B_41AA_EFEDE92BF07B",
  "this.Container_BD15ACC8_9478_145B_41C2_6D37AD97A48D",
  "this.Container_BD146CC8_9478_145B_41D1_ED9BAFE44A6B"
 ],
 "id": "Container_BD158CC8_9478_145B_41B5_3F260A00D36A",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "width": "50%",
 "minWidth": 460,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 50,
 "paddingLeft": 50,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "backgroundOpacity": 1,
 "paddingTop": 20,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "iconURL": "skin/IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF.jpg",
 "id": "IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF",
 "horizontalAlign": "center",
 "width": "25%",
 "minWidth": 50,
 "maxWidth": 60,
 "transparencyActive": false,
 "borderSize": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedRollOverIconURL": "skin/IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF_pressed_rollover.jpg",
 "click": "this.setComponentVisibility(this.Container_BD141CC8_9478_145B_41D4_265F47E47DB6, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "75%",
 "paddingTop": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF_rollover.jpg",
 "pressedIconURL": "skin/IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "ThumbnailList"
 },
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "left": 0,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "minWidth": 1,
 "itemMode": "normal",
 "horizontalAlign": "center",
 "width": "100%",
 "itemLabelFontFamily": "Oswald",
 "itemThumbnailOpacity": 1,
 "itemLabelFontStyle": "italic",
 "itemPaddingRight": 3,
 "itemMaxHeight": 1000,
 "class": "ThumbnailGrid",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemMaxWidth": 1000,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "verticalAlign": "middle",
 "paddingRight": 70,
 "itemBorderRadius": 0,
 "height": "92%",
 "itemPaddingLeft": 3,
 "itemHorizontalAlign": "center",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "itemOpacity": 1,
 "itemThumbnailBorderRadius": 0,
 "shadow": false,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "itemWidth": 220,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadow": true,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "paddingLeft": 70,
 "scrollBarMargin": 2,
 "itemMinWidth": 50,
 "itemLabelFontColor": "#666666",
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "minHeight": 1,
 "itemBackgroundColorDirection": "vertical",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "borderRadius": 5,
 "gap": 26,
 "paddingBottom": 70,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "itemPaddingBottom": 3,
 "itemThumbnailWidth": 220,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "borderSize": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "insetBorder": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "horizontalAlign": "center",
 "width": "25%",
 "minWidth": 50,
 "maxWidth": 60,
 "transparencyActive": false,
 "borderSize": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "left": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 1,
 "minWidth": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "class": "ViewerArea",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "99.975%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "shadow": false,
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "minHeight": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "layout": "absolute",
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": 140,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_BD87AAD4_9478_3C4B_41BE_0345EF6421AD"
 ],
 "id": "Container_BD87BAD4_9478_3C4B_41D2_A8D83FD6CFF3",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "borderSize": 0,
 "class": "Container",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_BD874AD4_9478_3C4B_41DE_DE522887B2C7",
  "this.Container_BD877AD4_9478_3C4B_41AC_A13D39E1584C",
  "this.Container_BD84DAD4_9478_3C4B_41D9_38F6A3F8328B"
 ],
 "id": "Container_BD875AD4_9478_3C4B_4145_58969FE396D8",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minWidth": 460,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 60,
 "paddingLeft": 60,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "backgroundOpacity": 1,
 "paddingTop": 20,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "iconURL": "skin/IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1.jpg",
 "id": "IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1",
 "horizontalAlign": "center",
 "width": "25%",
 "minWidth": 50,
 "maxWidth": 60,
 "transparencyActive": false,
 "borderSize": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedRollOverIconURL": "skin/IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1_pressed_rollover.jpg",
 "click": "this.setComponentVisibility(this.Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "75%",
 "paddingTop": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1_rollover.jpg",
 "pressedIconURL": "skin/IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "id": "Image_4199A732_503C_25F2_41C1_D14D7EB70CD3",
 "width": "100%",
 "left": "0%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "maxWidth": 1334,
 "url": "skin/Image_4199A732_503C_25F2_41C1_D14D7EB70CD3.png",
 "borderSize": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "22.779%",
 "top": "0%",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 679,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image7046"
 }
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Label1605"
 },
 "id": "Label_64CE434B_69D7_55D4_41D7_98FB4A2AABF4",
 "left": "0%",
 "horizontalAlign": "center",
 "width": "99.636%",
 "minWidth": 1,
 "borderSize": 0,
 "fontSize": "3vmin",
 "text": "(47) 98445-8740",
 "fontColor": "#FFFFFF",
 "class": "Label",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "5.008%",
 "top": "19.39%",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "shadow": false,
 "fontStyle": "normal",
 "propagateClick": false,
 "fontWeight": "normal"
},
{
 "layout": "vertical",
 "data": {
  "name": "-Container buttons"
 },
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_4393AC5E_500C_6BB2_41C7_812CEE3E2CB0",
  "this.Button_429E7C0E_5003_EB92_41CB_224BCBCF4A95",
  "this.Container_43F1B4C2_500C_2492_41C4_FB01A95738B8",
  "this.Button_437D5969_5004_2D9E_41D0_097F4C0623B0",
  "this.Container_42ECCF2F_501C_2592_41CE_04C61BC589EA",
  "this.Button_64A5C9D9_69C6_CE0E_41D1_E7C665C61B71",
  "this.Container_6418FF75_69C6_C206_41CF_93508FAE43A8",
  "this.Button_643EA363_69C6_C202_41C3_F1FA11294950",
  "this.Container_643AFC2F_69C7_4602_41A8_53FED017ACE6"
 ],
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "class": "Container",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "top": "25%",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "Image_BD15FCC8_9478_145B_41DA_B306F52E3FCF",
 "width": "100%",
 "left": "0%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "maxWidth": 2000,
 "url": "skin/Image_BD15FCC8_9478_145B_41DA_B306F52E3FCF.jpg",
 "borderSize": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 1000,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_BD159CC8_9478_145B_41AA_EFEDE92BF07B",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 50,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "minHeight": 0,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_BD15BCC8_9478_145B_41A0_1BDCC9E92EE8",
  "this.Button_BD145CC8_9478_145B_41D6_359CB4C54BCA"
 ],
 "id": "Container_BD15ACC8_9478_145B_41C2_6D37AD97A48D",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 100,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 300,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_BD146CC8_9478_145B_41D1_ED9BAFE44A6B",
 "layout": "horizontal",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 30,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "horizontalAlign": "right",
 "right": 20,
 "width": "100%",
 "minWidth": 50,
 "maxWidth": 60,
 "transparencyActive": false,
 "borderSize": 0,
 "class": "IconButton",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "36.14%",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "horizontalAlign": "right",
 "right": 20,
 "width": "100%",
 "minWidth": 50,
 "maxWidth": 60,
 "transparencyActive": false,
 "borderSize": 0,
 "class": "IconButton",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "36.14%",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "left": "0%",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 1,
 "minWidth": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "class": "ViewerArea",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "shadow": false,
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "minHeight": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "horizontalAlign": "right",
 "right": 20,
 "width": "10%",
 "minWidth": 50,
 "maxWidth": 60,
 "transparencyActive": false,
 "borderSize": 0,
 "class": "IconButton",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "10%",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "id": "Image_BD87AAD4_9478_3C4B_41BE_0345EF6421AD",
 "width": "100%",
 "left": "0%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "maxWidth": 2000,
 "url": "skin/Image_BD87AAD4_9478_3C4B_41BE_0345EF6421AD.jpg",
 "borderSize": 0,
 "class": "Image",
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 1000,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image40635"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_BD874AD4_9478_3C4B_41DE_DE522887B2C7",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "borderSize": 0,
 "class": "Container",
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "5%",
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "minHeight": 0,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_BD876AD4_9478_3C4B_41D6_3C886AE845B6",
  "this.Container_BD870AD4_9478_3C4B_41D4_7C5B5C74D90A"
 ],
 "id": "Container_BD877AD4_9478_3C4B_41AC_A13D39E1584C",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 100,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 520,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 30,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_BD84DAD4_9478_3C4B_41D9_38F6A3F8328B",
 "layout": "horizontal",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Tour Info"
 },
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "class": "Button",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 10,
 "mode": "push",
 "fontSize": "22px",
 "height": 52.4,
 "label": "FA\u00c7A AQUI SUA COTA\u00c7\u00c3O",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('http://wa.me/5547984458740', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "shadow": false,
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Panorama List"
 },
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "class": "Button",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 10,
 "mode": "push",
 "fontSize": "22px",
 "height": 50,
 "label": "INSTAGRAM",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('https://www.instagram.com/starbairrodavelha/', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 23,
 "paddingBottom": 0,
 "textDecoration": "none",
 "shadow": false,
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Location"
 },
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedLabel": "Location",
 "class": "Button",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 10,
 "mode": "push",
 "fontSize": "22px",
 "height": 50,
 "label": "FACEBOOK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('https://www.facebook.com/Star-Prote%C3%A7%C3%A3o-Veicular-Blumenau-Velha-102495865278974/', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "shadow": false,
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Floorplan"
 },
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "class": "Button",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 10,
 "mode": "push",
 "fontSize": "22px",
 "height": 50,
 "label": "WHATSAPP 1",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('http://wa.me/5547984458740', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "shadow": false,
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Photoalbum"
 },
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "class": "Button",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 10,
 "mode": "push",
 "fontSize": "22px",
 "height": 50,
 "label": "WHATSAPP 2",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('http://wa.me/5547984335508', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "shadow": false,
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Contact"
 },
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "class": "Button",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 10,
 "mode": "push",
 "fontSize": "22px",
 "height": 50,
 "label": "TELEFONE",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('tel:047984335508', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "shadow": false,
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_4393AC5E_500C_6BB2_41C7_812CEE3E2CB0",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_429E7C0E_5003_EB92_41CB_224BCBCF4A95",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Contact"
 },
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "class": "Button",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 10,
 "mode": "push",
 "fontSize": "22px",
 "height": 50,
 "label": "LOCALIZA\u00c7\u00c3O",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('https://goo.gl/maps/UNsQw1WeFAXxiB6w9', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "shadow": false,
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_43F1B4C2_500C_2492_41C4_FB01A95738B8",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_437D5969_5004_2D9E_41D0_097F4C0623B0",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Contact"
 },
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "class": "Button",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 10,
 "mode": "push",
 "fontSize": "22px",
 "height": 50,
 "label": "CAT\u00c1LOGO",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.showPopupImage(this.ImageResource_455B5DE7_507C_2492_41D3_4D2AFD6D17D7, null, '90%', '90%', this.FadeInEffect_455B7DE7_507C_2492_41CB_096E26B22112, this.FadeOutEffect_455B1DE7_507C_2492_41CE_79F9BABE3D5F, {'paddingLeft':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'iconLineWidth':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "shadow": false,
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_42ECCF2F_501C_2592_41CE_04C61BC589EA",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_64A5C9D9_69C6_CE0E_41D1_E7C665C61B71",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Contact"
 },
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "class": "Button",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 10,
 "mode": "push",
 "fontSize": "22px",
 "height": 50,
 "label": "PLANT\u00c3O 24HS WHATS",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('http://wa.me/5548988378680', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "shadow": false,
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_6418FF75_69C6_C206_41CF_93508FAE43A8",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_643EA363_69C6_C202_41C3_F1FA11294950",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Contact"
 },
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "class": "Button",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 10,
 "mode": "push",
 "fontSize": "22px",
 "height": 50,
 "label": "PLANT\u00c3O 24HS 0800",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('tel:08000420135', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "shadow": false,
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_643AFC2F_69C7_4602_41A8_53FED017ACE6",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "HTMLText_BD15BCC8_9478_145B_41A0_1BDCC9E92EE8",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "100%",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.3vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.58vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.58vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.58vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.58vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.58vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.72vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 20,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button31015"
 },
 "id": "Button_BD145CC8_9478_145B_41D6_359CB4C54BCA",
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "width": 180,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "fontSize": "2.39vh",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 50,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "label": "LOREM IPSUM",
 "backgroundColor": [
  "#04A3E1"
 ],
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "minHeight": 1,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 50,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "shadow": false,
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "bold",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "id": "HTMLText_BD876AD4_9478_3C4B_41D6_3C886AE845B6",
 "scrollBarOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "46%",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.3vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.58vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.58vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_BD873AD4_9478_3C4B_41E1_8CD5E779D6D2",
  "this.HTMLText_BD872AD4_9478_3C4B_41E0_004DEE953DF2"
 ],
 "id": "Container_BD870AD4_9478_3C4B_41D4_7C5B5C74D90A",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "class": "Container",
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "75%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "width": "25%",
 "id": "Image_BD873AD4_9478_3C4B_41E1_8CD5E779D6D2",
 "horizontalAlign": "left",
 "minWidth": 1,
 "maxWidth": 200,
 "url": "skin/Image_BD873AD4_9478_3C4B_41E1_8CD5E779D6D2.jpg",
 "borderSize": 0,
 "class": "Image",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 200,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 }
},
{
 "id": "HTMLText_BD872AD4_9478_3C4B_41E0_004DEE953DF2",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "width": "75%",
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "100%",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.58vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.29vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "start": "this.playAudioList([this.audio_5C000412_5109_CD89_41D1_2958BB13B171]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_BD141CC8_9478_145B_41D4_265F47E47DB6",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 20,
 "horizontalAlign": "left",
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "registerKey": function(key, value){  window[key] = value; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "existsKey": function(key){  return key in window; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getKey": function(key){  return window[key]; }
 },
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "paddingLeft": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "minHeight": 20,
 "borderRadius": 0,
 "gap": 10,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingBottom": 0,
 "shadow": false,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
