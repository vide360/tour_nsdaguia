(function(){
    var script = {
 "definitions": [{
 "class": "Menu",
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "children": [
  {
   "label": "01",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "02",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "03",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "04",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "05",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "06",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "sacrar",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "pia batism",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "label": "07",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "label": "08",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "label": "cima",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "label": "Media",
 "rollOverBackgroundColor": "#000000",
 "id": "Menu_BC8E618D_AE2A_4FEE_41E1_AAA0450FAB4E",
 "fontColor": "#FFFFFF",
 "rollOverFontColor": "#FFFFFF",
 "opacity": 0.4,
 "rollOverOpacity": 0.8,
 "backgroundColor": "#404040",
 "selectedBackgroundColor": "#202020"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A204F536_A964_3A46_41AA_C80650D4B77B"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "sacrar",
 "id": "panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF",
 "thumbnailUrl": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_BC8E618D_AE2A_4FEE_41E1_AAA0450FAB4E",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BFEF8419_AE1D_D4F6_41B4_CC6059DC0522"
 ]
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_B45B32B1_A92C_DE5A_41DC_CA657BABABF4.ogg",
  "mp3Url": "media/audio_B45B32B1_A92C_DE5A_41DC_CA657BABABF4.mp3"
 },
 "id": "audio_B45B32B1_A92C_DE5A_41DC_CA657BABABF4",
 "data": {
  "label": "Ningu\u00e9m Explica Deus"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A2197408_A965_FA49_41D0_1534161BEAF3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "03",
 "id": "panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07",
 "thumbnailUrl": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_BC8E618D_AE2A_4FEE_41E1_AAA0450FAB4E",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B9284490_A9E4_5A59_41D2_3D275A009211",
  "this.overlay_B89C08BD_A9EC_2A4B_41D8_B10875DC426F",
  "this.panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.92,
  "pitch": 10.1
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_BC93D1FB_AE2A_4F2A_41E4_8FF9C24DC185",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A2197408_A965_FA49_41D0_1534161BEAF3",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A2197408_A965_FA49_41D0_1534161BEAF3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A204F536_A964_3A46_41AA_C80650D4B77B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A204F536_A964_3A46_41AA_C80650D4B77B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A201169A_A964_6649_41E3_B9B503EFF1B7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A2008743_A964_663F_41D6_848CBF6029F4",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A2008743_A964_663F_41D6_848CBF6029F4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A201485A_A964_2AC9_41DC_014CFD035340",
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_A201485A_A964_2AC9_41DC_014CFD035340_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 180,
  "pitch": 3.67
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_BCF22304_AE2A_4CDE_41D4_1A4BF40CB052",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A204F536_A964_3A46_41AA_C80650D4B77B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A2197408_A965_FA49_41D0_1534161BEAF3_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "01",
 "id": "panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D",
 "thumbnailUrl": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_BC8E618D_AE2A_4FEE_41E1_AAA0450FAB4E",
 "hfovMax": 136,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B93EB7C3_A9E4_663F_41E0_DAC85DCA34C4",
  "this.panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A201169A_A964_6649_41E3_B9B503EFF1B7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A201485A_A964_2AC9_41DC_014CFD035340"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "08",
 "id": "panorama_A2008743_A964_663F_41D6_848CBF6029F4",
 "thumbnailUrl": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_BC8E618D_AE2A_4FEE_41E1_AAA0450FAB4E",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B850BBC0_A9EC_2E39_41E1_E6EC560C97E3",
  "this.overlay_BE7C4466_A927_FAC6_41DC_492A32B5F5CA",
  "this.panorama_A2008743_A964_663F_41D6_848CBF6029F4_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_BCADD20A_AE2A_4CEA_41B4_B1C2B5FEC0F0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.41,
  "pitch": -7.35
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_BC9A41DB_AE2A_4F6A_41DC_6FA22EAC1043",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A2008743_A964_663F_41D6_848CBF6029F4_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A2008743_A964_663F_41D6_848CBF6029F4"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "cima",
 "id": "panorama_A201485A_A964_2AC9_41DC_014CFD035340",
 "thumbnailUrl": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_BC8E618D_AE2A_4FEE_41E1_AAA0450FAB4E",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BF41E22D_A9E4_FE4B_41C8_8D3119EE7E87",
  "this.panorama_A201485A_A964_2AC9_41DC_014CFD035340_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_BCCF1268_AE2A_4D56_41DB_0864CAFBF10A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A201485A_A964_2AC9_41DC_014CFD035340_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 180,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_BCC1E297_AE2A_4DFA_41D8_1EBB27064D6B",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "02",
 "id": "panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D",
 "thumbnailUrl": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_BC8E618D_AE2A_4FEE_41E1_AAA0450FAB4E",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B92D0B40_A9E4_EE39_417C_45F10CD12438",
  "this.overlay_B8AEBE25_A9EC_267B_41E2_DB92DD47DE01",
  "this.panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A2197408_A965_FA49_41D0_1534161BEAF3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A204F536_A964_3A46_41AA_C80650D4B77B"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "05",
 "id": "panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061",
 "thumbnailUrl": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_BC8E618D_AE2A_4FEE_41E1_AAA0450FAB4E",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B92B97BC_A9E4_2649_41CD_D35D16E88340",
  "this.overlay_B8812D63_A9EC_EAFF_41D7_4F806F1089E2",
  "this.panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_BCBFF239_AE2A_4D36_41E3_6B4C3B8D5EF6",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_BC80B1CC_AE2A_4F6E_41DE_47F9F83D269C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A204F536_A964_3A46_41AA_C80650D4B77B"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "pia batism",
 "id": "panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE",
 "thumbnailUrl": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_BC8E618D_AE2A_4FEE_41E1_AAA0450FAB4E",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BCF7AF26_A9E4_6679_41DC_602F3D14C95D",
  "this.panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 180,
  "pitch": -0.92
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_BC85D1BC_AE2A_4F2E_41DC_58A078F26E40",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "04",
 "id": "panorama_A2197408_A965_FA49_41D0_1534161BEAF3",
 "thumbnailUrl": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_BC8E618D_AE2A_4FEE_41E1_AAA0450FAB4E",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B9263EC0_A9E4_E639_41D4_F1ABD06A3088",
  "this.overlay_B8811E77_A9EC_66C7_41D4_F15DA7A3E100",
  "this.panorama_A2197408_A965_FA49_41D0_1534161BEAF3_tcap0"
 ]
},
{
 "gyroscopeEnabled": true,
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.16,
  "pitch": -1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_BCA51229_AE2A_4CD6_41D8_F0093BE82D34",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.59,
  "pitch": 29.39
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_BCB7C258_AE2A_4D76_41C0_CCC0179ADD9A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_BCE792D5_AE2A_4D7E_41E5_2C253CF87265",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist",
 "items": [
  {
   "media": "this.panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A2197408_A965_FA49_41D0_1534161BEAF3",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A2197408_A965_FA49_41D0_1534161BEAF3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A204F536_A964_3A46_41AA_C80650D4B77B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A204F536_A964_3A46_41AA_C80650D4B77B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A201169A_A964_6649_41E3_B9B503EFF1B7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A2008743_A964_663F_41D6_848CBF6029F4",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A2008743_A964_663F_41D6_848CBF6029F4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A201485A_A964_2AC9_41DC_014CFD035340",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A201485A_A964_2AC9_41DC_014CFD035340_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 12.86
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_BCC9F278_AE2A_4D36_41C1_5274F9BFB9CB",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 180,
  "pitch": -4.59
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_BCD2B2C6_AE2A_4D5A_41AA_FF08A96EBF94",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A201169A_A964_6649_41E3_B9B503EFF1B7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "06",
 "id": "panorama_A204F536_A964_3A46_41AA_C80650D4B77B",
 "thumbnailUrl": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_BC8E618D_AE2A_4FEE_41E1_AAA0450FAB4E",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B933843E_A9E4_7A46_41C7_DB214DC47ED6",
  "this.overlay_BBF4B253_A9EC_3EDF_41E5_28F5C1D244B1",
  "this.overlay_BB49F2C2_A9EC_3E39_41E2_965D0E71A793",
  "this.overlay_B8D9FAD3_A9EC_2FDF_418A_76FEAA455D52",
  "this.panorama_A204F536_A964_3A46_41AA_C80650D4B77B_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_BCFDC2E5_AE2A_4D5E_41D2_C3F443C7F3F5",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 180,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_BCDBB2A6_AE2A_4DDA_41DF_66D97ADD1FC1",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -3.26,
  "pitch": 28.7
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 28.7,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": -3.26,
  "stereographicFactor": 1,
  "pitch": -90
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A2008743_A964_663F_41D6_848CBF6029F4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A204F536_A964_3A46_41AA_C80650D4B77B"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "07",
 "id": "panorama_A201169A_A964_6649_41E3_B9B503EFF1B7",
 "thumbnailUrl": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_t.jpg",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_BC8E618D_AE2A_4FEE_41E1_AAA0450FAB4E",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B92E8325_A9E5_DE7B_41B9_2AF5DE785FBF",
  "this.overlay_B94BA708_A9EC_264A_4174_6F1C35FD6CA2",
  "this.panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_tcap0"
 ]
},
{
 "transitionDuration": 500,
 "shadow": false,
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "minWidth": 100,
 "left": 0,
 "toolTipFontSize": "12px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial Baltic",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "borderRadius": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadShadowHorizontalLength": 0
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "shadow": false,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_691B6C80_7506_9D4B_41B4_89FD1E7BCC23",
 "width": 330,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "left": "0%",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "data": {
  "name": "--- LEFT PANEL 5"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "shadow": false,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": 115.05,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 641,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "shadow": false,
 "children": [
  "this.Container_6ECE8198_4F7D_CE0F_41B6_C7C8D7E8FF58",
  "this.Container_6EC9F199_4F7D_CE01_41C8_1A8AEA0A382B"
 ],
 "id": "Container_6EC9D199_4F7D_CE01_41CD_90869FADC821",
 "left": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "---INFO photo"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "shadow": false,
 "children": [
  "this.Container_6DF721BC_4F7E_CE07_41B3_A48ABF3626BB"
 ],
 "id": "Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2",
 "left": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "---PANORAMA LIST"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "shadow": false,
 "children": [
  "this.Container_6FFB1C7E_4F7E_B603_41CC_6FEE622C6989",
  "this.Container_6FFBFC7E_4F7E_B603_41B1_0E24EB521F6F"
 ],
 "id": "Container_6FFBDC7E_4F7E_B603_419C_369C462C516C",
 "left": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "---LOCATION"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "shadow": false,
 "children": [
  "this.Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73"
 ],
 "id": "Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2",
 "left": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "---PHOTOALBUM"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "shadow": false,
 "children": [
  "this.Container_6FD227C1_4F7F_B27E_41A4_4340D943D7A5"
 ],
 "id": "Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08",
 "left": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "---FLOORPLAN"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "shadow": false,
 "children": [
  "this.Container_17522AC5_57D1_805F_41CA_96B265C364E4",
  "this.Container_17516AC5_57D1_805F_41CA_8E754787B1A2"
 ],
 "id": "Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8",
 "left": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "--REALTOR"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "maxWidth": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minHeight": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "maxHeight": 58,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "cursor": "hand",
 "class": "IconButton"
},
{
 "maxWidth": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minHeight": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "maxHeight": 58,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "cursor": "hand",
 "class": "IconButton"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.91,
   "image": "this.AnimatedImageResource_B66B5F38_AE1E_D336_41D4_6F1E8B5D7F25",
   "pitch": -20.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 127.67,
   "distance": 100
  }
 ],
 "id": "overlay_BFEF8419_AE1D_D4F6_41B4_CC6059DC0522",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 127.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A2197408_A965_FA49_41D0_1534161BEAF3, this.camera_BCFDC2E5_AE2A_4D5E_41D2_C3F443C7F3F5); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.67,
   "image": "this.AnimatedImageResource_B3033BC2_A91C_2E39_41D4_7B3731F1AB7E",
   "pitch": -22.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.83,
   "distance": 100
  }
 ],
 "id": "overlay_B9284490_A9E4_5A59_41D2_3D275A009211",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D, this.camera_BCF22304_AE2A_4CDE_41D4_1A4BF40CB052); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.44,
   "image": "this.AnimatedImageResource_B303DBC2_A91C_2E39_41DE_EE229D56460E",
   "pitch": -32.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 176.76,
   "distance": 100
  }
 ],
 "id": "overlay_B89C08BD_A9EC_2A4B_41D8_B10875DC426F",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.79
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_tcap0.png",
    "width": 1454,
    "class": "ImageResourceLevel",
    "height": 1454
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 27,
 "id": "panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.62,
   "image": "this.AnimatedImageResource_B3004BC2_A91C_2E39_41DE_00E6BA42C762",
   "pitch": -8.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -6.33,
   "distance": 100
  }
 ],
 "id": "overlay_B93EB7C3_A9E4_663F_41E0_DAC85DCA34C4",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.95
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_tcap0.png",
    "width": 1454,
    "class": "ImageResourceLevel",
    "height": 1454
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 27,
 "id": "panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A201169A_A964_6649_41E3_B9B503EFF1B7, this.camera_BCDBB2A6_AE2A_4DDA_41DF_66D97ADD1FC1); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.36,
   "image": "this.AnimatedImageResource_B33CDBC2_A91C_2E39_41CE_F77D97C8A728",
   "pitch": -13.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 179.63,
   "distance": 100
  }
 ],
 "id": "overlay_B850BBC0_A9EC_2E39_41E1_E6EC560C97E3",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.78,
   "image": "this.AnimatedImageResource_B3B3FE4C_A924_26C9_41E3_0FD79CA505E3",
   "pitch": 2.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 178.4,
   "distance": 100
  }
 ],
 "id": "overlay_BE7C4466_A927_FAC6_41DC_492A32B5F5CA",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.8
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_tcap0.png",
    "width": 1454,
    "class": "ImageResourceLevel",
    "height": 1454
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 27,
 "id": "panorama_A2008743_A964_663F_41D6_848CBF6029F4_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A2008743_A964_663F_41D6_848CBF6029F4, this.camera_BC85D1BC_AE2A_4F2E_41DC_58A078F26E40); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.05,
   "image": "this.AnimatedImageResource_8D933352_A92C_7ED9_41DB_EBF6147031C5",
   "pitch": -11.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.2,
   "distance": 100
  }
 ],
 "id": "overlay_BF41E22D_A9E4_FE4B_41C8_8D3119EE7E87",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 22.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.45
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_tcap0.png",
    "width": 1454,
    "class": "ImageResourceLevel",
    "height": 1454
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 27,
 "id": "panorama_A201485A_A964_2AC9_41DC_014CFD035340_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07, this.camera_BCCF1268_AE2A_4D56_41DB_0864CAFBF10A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.69,
   "image": "this.AnimatedImageResource_B300EBC2_A91C_2E39_41D0_4DB9981AEB6A",
   "pitch": -7.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -3.22,
   "distance": 100
  }
 ],
 "id": "overlay_B92D0B40_A9E4_EE39_417C_45F10CD12438",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.69,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D, this.camera_BCB7C258_AE2A_4D76_41C0_CCC0179ADD9A); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.72,
   "image": "this.AnimatedImageResource_B3037BC2_A91C_2E39_41B3_A03F3B11C067",
   "pitch": -30.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 173.08,
   "distance": 100
  }
 ],
 "id": "overlay_B8AEBE25_A9EC_267B_41E2_DB92DD47DE01",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.72,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.74
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_tcap0.png",
    "width": 1454,
    "class": "ImageResourceLevel",
    "height": 1454
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 27,
 "id": "panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A204F536_A964_3A46_41AA_C80650D4B77B, this.camera_BCE792D5_AE2A_4D7E_41E5_2C253CF87265); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.46,
   "image": "this.AnimatedImageResource_B3028BC2_A91C_2E39_41E0_2FAD060F999D",
   "pitch": -12.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.78,
   "distance": 100
  }
 ],
 "id": "overlay_B92B97BC_A9E4_2649_41CD_D35D16E88340",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A2197408_A965_FA49_41D0_1534161BEAF3, this.camera_BCD2B2C6_AE2A_4D5A_41AA_FF08A96EBF94); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.72,
   "image": "this.AnimatedImageResource_B33D4BC2_A91C_2E39_41D0_4FE47D78E811",
   "pitch": -30.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -179.96,
   "distance": 100
  }
 ],
 "id": "overlay_B8812D63_A9EC_EAFF_41D7_4F806F1089E2",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.72,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.74
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_tcap0.png",
    "width": 1454,
    "class": "ImageResourceLevel",
    "height": 1454
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 27,
 "id": "panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.07,
   "image": "this.AnimatedImageResource_B33CABC2_A91C_2E39_41DF_30F7689D4894",
   "pitch": -18.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -99.78,
   "distance": 100
  }
 ],
 "id": "overlay_BCF7AF26_A9E4_6679_41DC_602F3D14C95D",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.07,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.06
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_tcap0.png",
    "width": 1454,
    "class": "ImageResourceLevel",
    "height": 1454
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 27,
 "id": "panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061, this.camera_BC80B1CC_AE2A_4F6E_41DE_47F9F83D269C); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.46,
   "image": "this.AnimatedImageResource_B303ABC2_A91C_2E39_41E3_AB359724F12B",
   "pitch": -12.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.78,
   "distance": 100
  }
 ],
 "id": "overlay_B9263EC0_A9E4_E639_41D4_F1ABD06A3088",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07, this.camera_BC9A41DB_AE2A_4F6A_41DC_6FA22EAC1043); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.63,
   "image": "this.AnimatedImageResource_B3022BC2_A91C_2E39_41B9_775BCD79A5F2",
   "pitch": -22.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -179.14,
   "distance": 100
  }
 ],
 "id": "overlay_B8811E77_A9EC_66C7_41D4_F15DA7A3E100",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.63,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.97
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_tcap0.png",
    "width": 1454,
    "class": "ImageResourceLevel",
    "height": 1454
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 27,
 "id": "panorama_A2197408_A965_FA49_41D0_1534161BEAF3_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "maxWidth": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minHeight": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "maxHeight": 58,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton HS "
 },
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "cursor": "hand",
 "class": "IconButton"
},
{
 "maxWidth": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minHeight": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "maxHeight": 58,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "cursor": "hand",
 "class": "IconButton"
},
{
 "maxWidth": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minHeight": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "maxHeight": 58,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "cursor": "hand",
 "class": "IconButton"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A201169A_A964_6649_41E3_B9B503EFF1B7, this.camera_BCADD20A_AE2A_4CEA_41B4_B1C2B5FEC0F0); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.44,
   "image": "this.AnimatedImageResource_B6687F36_AE1E_D33A_41E0_5ACBF7440D07",
   "pitch": -12.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.04,
   "distance": 100
  }
 ],
 "id": "overlay_B933843E_A9E4_7A46_41C7_DB214DC47ED6",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF, this.camera_BC93D1FB_AE2A_4F2A_41E4_8FF9C24DC185); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01 Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.29,
   "image": "this.AnimatedImageResource_B33DABC2_A91C_2E39_41C5_5DCB8016E962",
   "pitch": -23.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -11.58,
   "distance": 50
  }
 ],
 "id": "overlay_BBF4B253_A9EC_3EDF_41E5_28F5C1D244B1",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 11.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE, this.camera_BCBFF239_AE2A_4D36_41E3_6B4C3B8D5EF6); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.36,
   "image": "this.AnimatedImageResource_B33C5BC2_A91C_2E39_41E2_A44E7C3EA919",
   "pitch": -22.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 9.18,
   "distance": 50
  }
 ],
 "id": "overlay_BB49F2C2_A9EC_3E39_41E2_965D0E71A793",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 11.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061, this.camera_BCA51229_AE2A_4CD6_41D8_F0093BE82D34); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.08,
   "image": "this.AnimatedImageResource_B87CAB85_AE2A_33DE_41B6_287D7697B423",
   "pitch": -27.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -179.14,
   "distance": 100
  }
 ],
 "id": "overlay_B8D9FAD3_A9EC_2FDF_418A_76FEAA455D52",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.08,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.88
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_tcap0.png",
    "width": 1454,
    "class": "ImageResourceLevel",
    "height": 1454
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 27,
 "id": "panorama_A204F536_A964_3A46_41AA_C80650D4B77B_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A2008743_A964_663F_41D6_848CBF6029F4, this.camera_BCC9F278_AE2A_4D36_41C1_5274F9BFB9CB); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.6,
   "image": "this.AnimatedImageResource_B33FFBC2_A91C_2E39_41C6_D02D26ED6023",
   "pitch": -9.47,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.67,
   "distance": 100
  }
 ],
 "id": "overlay_B92E8325_A9E5_DE7B_41B9_2AF5DE785FBF",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.6,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A204F536_A964_3A46_41AA_C80650D4B77B, this.camera_BCC1E297_AE2A_4DFA_41D8_1EBB27064D6B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.46,
   "image": "this.AnimatedImageResource_BB86E87D_AE16_FD2F_41D7_3C0CFF0F1629",
   "pitch": -24.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -179.14,
   "distance": 100
  }
 ],
 "id": "overlay_B94BA708_A9EC_264A_4174_6F1C35FD6CA2",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.61
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_tcap0.png",
    "width": 1454,
    "class": "ImageResourceLevel",
    "height": 1454
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 27,
 "id": "panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "shadow": false,
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "width": 66,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "left": "0%",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "data": {
  "name": "- COLLAPSE"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "shadow": false,
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "width": 254,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "left": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "data": {
  "name": "- EXPANDED"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadow": false,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": 110,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 110,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "button menu sup"
 },
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "shadow": false,
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
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "height": "85.959%",
 "minHeight": 1,
 "width": "91.304%",
 "backgroundOpacity": 0,
 "gap": 3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "-button set"
 },
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "horizontalAlign": "center"
},
{
 "layout": "horizontal",
 "horizontalAlign": "left",
 "shadow": true,
 "children": [
  "this.Container_6ECE7198_4F7D_CE0F_41B4_ED3C974BE2A1",
  "this.Container_6ECE5198_4F7D_CE0F_416D_84774E7F2542"
 ],
 "id": "Container_6ECE8198_4F7D_CE0F_41B6_C7C8D7E8FF58",
 "left": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "horizontalAlign": "right",
 "shadow": false,
 "children": [
  "this.IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C"
 ],
 "id": "Container_6EC9F199_4F7D_CE01_41C8_1A8AEA0A382B",
 "left": "15%",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "horizontalAlign": "center",
 "shadow": true,
 "children": [
  "this.Container_6DF7C1BC_4F7E_CE07_41B8_32B44A9C9C65",
  "this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9"
 ],
 "id": "Container_6DF721BC_4F7E_CE07_41B3_A48ABF3626BB",
 "left": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "horizontal",
 "horizontalAlign": "left",
 "shadow": true,
 "children": [
  "this.WebFrame_6FFB0C7E_4F7E_B603_41AD_F367B1D68E70"
 ],
 "id": "Container_6FFB1C7E_4F7E_B603_41CC_6FEE622C6989",
 "left": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "horizontalAlign": "right",
 "shadow": false,
 "children": [
  "this.IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848"
 ],
 "id": "Container_6FFBFC7E_4F7E_B603_41B1_0E24EB521F6F",
 "left": "15%",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "horizontalAlign": "center",
 "shadow": true,
 "children": [
  "this.Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1"
 ],
 "id": "Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73",
 "left": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "horizontalAlign": "center",
 "shadow": true,
 "children": [
  "this.MapViewer",
  "this.Container_6FD207C1_4F7F_B27E_41CC_18278046BDCA"
 ],
 "id": "Container_6FD227C1_4F7F_B27E_41A4_4340D943D7A5",
 "left": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "horizontal",
 "horizontalAlign": "left",
 "shadow": true,
 "children": [
  "this.Container_17521AC5_57D1_805F_41CD_E04DDA9C90DD",
  "this.Container_1752FAC5_57D1_805F_4193_13B2577B9D8A"
 ],
 "id": "Container_17522AC5_57D1_805F_41CA_96B265C364E4",
 "left": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "horizontalAlign": "right",
 "shadow": false,
 "children": [
  "this.IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0"
 ],
 "id": "Container_17516AC5_57D1_805F_41CA_8E754787B1A2",
 "left": "15%",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B66B5F38_AE1E_D336_41D4_6F1E8B5D7F25",
 "levels": [
  {
   "url": "media/panorama_BD2AB389_AE1A_F3D6_41E4_8BFFAE2D9FBF_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B3033BC2_A91C_2E39_41D4_7B3731F1AB7E",
 "levels": [
  {
   "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B303DBC2_A91C_2E39_41DE_EE229D56460E",
 "levels": [
  {
   "url": "media/panorama_A214D1F7_A965_DDC7_41BA_10BE23847D07_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B3004BC2_A91C_2E39_41DE_00E6BA42C762",
 "levels": [
  {
   "url": "media/panorama_A556AADC_A964_6FC9_41BF_8671D2C7715D_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B33CDBC2_A91C_2E39_41CE_F77D97C8A728",
 "levels": [
  {
   "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B3B3FE4C_A924_26C9_41E3_0FD79CA505E3",
 "levels": [
  {
   "url": "media/panorama_A2008743_A964_663F_41D6_848CBF6029F4_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8D933352_A92C_7ED9_41DB_EBF6147031C5",
 "levels": [
  {
   "url": "media/panorama_A201485A_A964_2AC9_41DC_014CFD035340_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B300EBC2_A91C_2E39_41D0_4DB9981AEB6A",
 "levels": [
  {
   "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B3037BC2_A91C_2E39_41B3_A03F3B11C067",
 "levels": [
  {
   "url": "media/panorama_A260E1BB_A964_3A4F_41E1_93EE6DAA061D_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B3028BC2_A91C_2E39_41E0_2FAD060F999D",
 "levels": [
  {
   "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B33D4BC2_A91C_2E39_41D0_4FE47D78E811",
 "levels": [
  {
   "url": "media/panorama_A20484A1_A965_DA7B_41CF_F79D91ED6061_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B33CABC2_A91C_2E39_41DF_30F7689D4894",
 "levels": [
  {
   "url": "media/panorama_A20309CF_A964_2DC7_41DB_F116C9509AEE_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B303ABC2_A91C_2E39_41E3_AB359724F12B",
 "levels": [
  {
   "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B3022BC2_A91C_2E39_41B9_775BCD79A5F2",
 "levels": [
  {
   "url": "media/panorama_A2197408_A965_FA49_41D0_1534161BEAF3_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B6687F36_AE1E_D33A_41E0_5ACBF7440D07",
 "levels": [
  {
   "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B33DABC2_A91C_2E39_41C5_5DCB8016E962",
 "levels": [
  {
   "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B33C5BC2_A91C_2E39_41E2_A44E7C3EA919",
 "levels": [
  {
   "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_1_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B87CAB85_AE2A_33DE_41B6_287D7697B423",
 "levels": [
  {
   "url": "media/panorama_A204F536_A964_3A46_41AA_C80650D4B77B_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B33FFBC2_A91C_2E39_41C6_D02D26ED6023",
 "levels": [
  {
   "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BB86E87D_AE16_FD2F_41D7_3C0CFF0F1629",
 "levels": [
  {
   "url": "media/panorama_A201169A_A964_6649_41E3_B9B503EFF1B7_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "shadow": false,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "width": 30,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "left": "0%",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#0089C8"
 ],
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "gap": 10,
 "propagateClick": true,
 "data": {
  "name": "Container blue"
 },
 "backgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "class": "Container"
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "shadow": false,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 4,
 "width": 50,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "top": "40%",
 "paddingRight": 0,
 "bottom": "40%",
 "minHeight": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "maxHeight": 80,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "propagateClick": true,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "maxWidth": 80
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "shadow": false,
 "children": [
  "this.Image_B5448939_A923_EA4A_41BF_FD2AFA617367",
  "this.Image_B54586E4_A91C_27F9_41E1_62F01EF7C202",
  "this.Image_B5429808_A91C_2A49_41A9_165DBAD211FC",
  "this.Image_8245B370_AB24_3ED9_41E4_E14159A029A3",
  "this.Label_81BC74C7_AB2C_3BC7_41B5_BCA25EB1ED5C"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "width": 225,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.49,
 "left": "0%",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 40,
 "backgroundColor": [
  "#0089C8"
 ],
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.51,
 "paddingTop": 40,
 "paddingBottom": 40,
 "height": "100%",
 "gap": 10,
 "propagateClick": true,
 "data": {
  "name": "- Buttons set"
 },
 "backgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "paddingLeft": 40,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "class": "Container"
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "shadow": false,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "minWidth": 1,
 "right": 9,
 "width": 40,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "top": "41.49%",
 "paddingRight": 0,
 "bottom": "37.83%",
 "minHeight": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "maxHeight": 40,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "propagateClick": true,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "maxWidth": 40
},
{
 "maxWidth": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minHeight": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "maxHeight": 58,
 "paddingTop": 0,
 "click": "this.shareTwitter(window.location.href)",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "cursor": "hand",
 "class": "IconButton"
},
{
 "maxWidth": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minHeight": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "maxHeight": 58,
 "paddingTop": 0,
 "click": "this.shareFacebook(window.location.href)",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FB"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "cursor": "hand",
 "class": "IconButton"
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "shadow": false,
 "children": [
  "this.Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2"
 ],
 "id": "Container_6ECE7198_4F7D_CE0F_41B4_ED3C974BE2A1",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "width": "85%",
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "gap": 10,
 "data": {
  "name": "-left"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "vertical",
 "scrollBarWidth": 10,
 "shadow": false,
 "children": [
  "this.Container_6ECE4198_4F7D_CE0F_41A0_688A405FA9A1",
  "this.Container_6ECE3198_4F7D_CE0F_41B9_971123164DFE",
  "this.Container_6ECE0198_4F7D_CE0F_41C2_173DE9AC91EC"
 ],
 "id": "Container_6ECE5198_4F7D_CE0F_416D_84774E7F2542",
 "minWidth": 460,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "width": "50%",
 "backgroundOpacity": 1,
 "paddingTop": 20,
 "paddingBottom": 20,
 "height": "100%",
 "gap": 0,
 "data": {
  "name": "-right"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 50,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "maxWidth": 50,
 "horizontalAlign": "center",
 "shadow": false,
 "id": "IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C",
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "transparencyActive": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "75%",
 "minHeight": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C_rollover.jpg",
 "maxHeight": 50,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C_pressed.jpg",
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C.jpg",
 "cursor": "hand"
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "shadow": false,
 "children": [
  "this.IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633"
 ],
 "id": "Container_6DF7C1BC_4F7E_CE07_41B8_32B44A9C9C65",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 140,
 "minHeight": 1,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "shadow": false,
 "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9",
 "left": 0,
 "itemMaxWidth": 1000,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "scrollBarColor": "#04A3E1",
 "itemPaddingRight": 3,
 "itemLabelFontFamily": "Oswald",
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailOpacity": 1,
 "itemMaxHeight": 1000,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "verticalAlign": "middle",
 "itemBorderRadius": 0,
 "width": "100%",
 "paddingRight": 70,
 "itemOpacity": 1,
 "height": "92%",
 "minHeight": 1,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemLabelFontStyle": "italic",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "backgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundOpacity": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 0,
 "propagateClick": false,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "paddingLeft": 70,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemThumbnailShadow": true,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist",
 "scrollBarMargin": 2,
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "paddingBottom": 70,
 "itemThumbnailShadow": false,
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10,
 "class": "ThumbnailGrid",
 "borderRadius": 5,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "horizontalAlign": "center"
},
{
 "shadow": false,
 "id": "WebFrame_6FFB0C7E_4F7E_B603_41AD_F367B1D68E70",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "scrollEnabled": true,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "insetBorder": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "data": {
  "name": "WebFrame"
 },
 "propagateClick": false,
 "class": "WebFrame",
 "borderRadius": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "maxWidth": 50,
 "horizontalAlign": "center",
 "shadow": false,
 "id": "IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848",
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "transparencyActive": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "75%",
 "minHeight": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_rollover.jpg",
 "maxHeight": 50,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_pressed.jpg",
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848.jpg",
 "cursor": "hand"
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "shadow": false,
 "children": [
  "this.ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
  "this.IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
  "this.IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
  "this.IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F"
 ],
 "id": "Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "gap": 10,
 "data": {
  "name": "Container photo"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transitionDuration": 500,
 "shadow": false,
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "minWidth": 1,
 "left": "0%",
 "toolTipFontSize": "12px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderRadius": 0,
 "minHeight": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial Baltic",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "borderRadius": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeadShadowHorizontalLength": 0
},
{
 "layout": "absolute",
 "shadow": false,
 "children": [
  "this.IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54"
 ],
 "id": "Container_6FD207C1_4F7F_B27E_41CC_18278046BDCA",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 140,
 "minHeight": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "propagateClick": false
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "shadow": false,
 "children": [
  "this.Image_17520AC5_57D1_805F_41CD_E7281C08A967"
 ],
 "id": "Container_17521AC5_57D1_805F_41CD_E04DDA9C90DD",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "width": "55%",
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "gap": 10,
 "data": {
  "name": "-left"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "vertical",
 "scrollBarWidth": 10,
 "shadow": false,
 "children": [
  "this.Container_1752EAC5_57D1_805F_41D2_28E2DB3AFCF5",
  "this.Container_1752DAC5_57D1_805F_41D3_AAEEE721B441",
  "this.Container_17517AC5_57D1_805F_41B5_79DEF98B730F"
 ],
 "id": "Container_1752FAC5_57D1_805F_4193_13B2577B9D8A",
 "minWidth": 460,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "width": "45%",
 "backgroundOpacity": 1,
 "paddingTop": 20,
 "paddingBottom": 20,
 "height": "100%",
 "gap": 0,
 "data": {
  "name": "-right"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 60,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "maxWidth": 60,
 "horizontalAlign": "center",
 "shadow": false,
 "id": "IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0",
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "transparencyActive": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "75%",
 "minHeight": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0_rollover.jpg",
 "maxHeight": 60,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0_pressed.jpg",
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "shadow": false,
 "id": "Image_B5448939_A923_EA4A_41BF_FD2AFA617367",
 "minWidth": 1,
 "left": "0%",
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "width": "100%",
 "url": "skin/Image_B5448939_A923_EA4A_41BF_FD2AFA617367.jpg",
 "verticalAlign": "middle",
 "top": "0%",
 "paddingRight": 0,
 "height": "27.342%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 720,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Image25420"
 },
 "propagateClick": false,
 "class": "Image",
 "borderRadius": 0,
 "paddingLeft": 0,
 "maxWidth": 1280
},
{
 "maxWidth": 278,
 "horizontalAlign": "center",
 "shadow": false,
 "id": "Image_B54586E4_A91C_27F9_41E1_62F01EF7C202",
 "minWidth": 1,
 "right": "15.96%",
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "width": "55.871%",
 "url": "skin/Image_B54586E4_A91C_27F9_41E1_62F01EF7C202.png",
 "verticalAlign": "middle",
 "top": "25.99%",
 "paddingRight": 0,
 "height": "21.224%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 278,
 "paddingTop": 0,
 "click": "this.openLink('https://www.facebook.com/nsdaguia.patos', '_blank')",
 "paddingBottom": 0,
 "data": {
  "name": "Image25472"
 },
 "propagateClick": false,
 "class": "Image",
 "borderRadius": 0,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "cursor": "hand",
 "shadow": false,
 "id": "Image_B5429808_A91C_2A49_41A9_165DBAD211FC",
 "minWidth": 1,
 "right": "15.71%",
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "width": "57.95%",
 "url": "skin/Image_B5429808_A91C_2A49_41A9_165DBAD211FC.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "29.83%",
 "height": "18.174%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 278,
 "paddingTop": 0,
 "click": "this.openLink('https://www.instagram.com/nsdaguiapatos/', '_blank')",
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Image25519"
 },
 "horizontalAlign": "center",
 "class": "Image",
 "borderRadius": 0,
 "paddingLeft": 0,
 "maxWidth": 278
},
{
 "cursor": "hand",
 "shadow": false,
 "id": "Image_8245B370_AB24_3ED9_41E4_E14159A029A3",
 "minWidth": 1,
 "right": "17.24%",
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "width": "56.586%",
 "url": "skin/Image_8245B370_AB24_3ED9_41E4_E14159A029A3.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "6.31%",
 "height": "17.027%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 278,
 "paddingTop": 0,
 "click": "this.openLink('https://www.diocesedepatospb.org.br/padroeira/', '_blank')",
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Image34871"
 },
 "horizontalAlign": "center",
 "class": "Image",
 "borderRadius": 0,
 "paddingLeft": 0,
 "maxWidth": 278
},
{
 "fontFamily": "Arial Black",
 "shadow": false,
 "id": "Label_81BC74C7_AB2C_3BC7_41B5_BCA25EB1ED5C",
 "textShadowColor": "#000000",
 "minWidth": 1,
 "fontColor": "#000000",
 "right": "0.03%",
 "borderSize": 0,
 "width": "98.586%",
 "textShadowOpacity": 0.7,
 "textShadowHorizontalLength": 1,
 "text": "NOSSA HISTÓRIA",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "2.1%",
 "height": "5.927%",
 "minHeight": 1,
 "fontWeight": "bold",
 "fontSize": "1.77vmin",
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 3,
 "paddingTop": 0,
 "click": "this.openLink('https://www.diocesedepatospb.org.br/padroeira/', '_blank')",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "textShadowVerticalLength": 1,
 "data": {
  "name": "Label34990"
 },
 "textDecoration": "none",
 "propagateClick": false,
 "class": "Label",
 "borderRadius": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center"
},
{
 "horizontalAlign": "center",
 "shadow": false,
 "id": "Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2",
 "minWidth": 1,
 "left": "0%",
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "width": "100%",
 "url": "skin/Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2.jpg",
 "verticalAlign": "middle",
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 1000,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Image"
 },
 "propagateClick": false,
 "class": "Image",
 "borderRadius": 0,
 "paddingLeft": 0,
 "maxWidth": 2000
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "shadow": false,
 "id": "Container_6ECE4198_4F7D_CE0F_41A0_688A405FA9A1",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 60,
 "minHeight": 0,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "scrollBarWidth": 10,
 "shadow": false,
 "children": [
  "this.HTMLText_6ECE2198_4F7D_CE0F_41C1_6D512C0D0B76",
  "this.Button_6ECE1198_4F7D_CE0F_41D1_D607B97BA20A"
 ],
 "id": "Container_6ECE3198_4F7D_CE0F_41B9_971123164DFE",
 "minWidth": 100,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 520,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 30,
 "height": "100%",
 "gap": 10,
 "data": {
  "name": "Container text"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "shadow": false,
 "id": "Container_6ECE0198_4F7D_CE0F_41C2_173DE9AC91EC",
 "scrollBarColor": "#000000",
 "width": 370,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 40,
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "maxWidth": 50,
 "horizontalAlign": "right",
 "shadow": false,
 "id": "IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633",
 "minWidth": 50,
 "right": 20,
 "borderSize": 0,
 "width": "100%",
 "transparencyActive": false,
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "height": "36.14%",
 "minHeight": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_rollover.jpg",
 "maxHeight": 50,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633.jpg",
 "pressedIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_pressed.jpg",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "transitionDuration": 500,
 "shadow": false,
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "minWidth": 1,
 "left": "0%",
 "toolTipFontSize": "12px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderRadius": 0,
 "minHeight": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial Baltic",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "borderRadius": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeadShadowHorizontalLength": 0
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "shadow": false,
 "id": "IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
 "left": 10,
 "minWidth": 50,
 "borderSize": 0,
 "width": "14.22%",
 "transparencyActive": false,
 "verticalAlign": "middle",
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "minHeight": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_rollover.png",
 "maxHeight": 60,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_pressed.png",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton <"
 },
 "propagateClick": false,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742.png",
 "maxWidth": 60
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "shadow": false,
 "id": "IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
 "minWidth": 50,
 "right": 10,
 "borderSize": 0,
 "width": "14.22%",
 "transparencyActive": false,
 "verticalAlign": "middle",
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "minHeight": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_rollover.png",
 "maxHeight": 60,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2.png",
 "pressedIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_pressed.png",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton >"
 },
 "propagateClick": false,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "maxWidth": 60
},
{
 "maxWidth": 50,
 "horizontalAlign": "right",
 "shadow": false,
 "id": "IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F",
 "minWidth": 50,
 "right": 20,
 "borderSize": 0,
 "width": "10%",
 "transparencyActive": false,
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "height": "10%",
 "minHeight": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_rollover.jpg",
 "maxHeight": 50,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F.jpg",
 "pressedIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_pressed.jpg",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "maxWidth": 50,
 "horizontalAlign": "right",
 "shadow": false,
 "id": "IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54",
 "minWidth": 50,
 "right": 20,
 "borderSize": 0,
 "width": "100%",
 "transparencyActive": false,
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "height": "36.14%",
 "minHeight": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54_rollover.jpg",
 "maxHeight": 50,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54.jpg",
 "pressedIconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54_pressed.jpg",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "shadow": false,
 "id": "Image_17520AC5_57D1_805F_41CD_E7281C08A967",
 "minWidth": 1,
 "left": "0%",
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "width": "100%",
 "url": "skin/Image_17520AC5_57D1_805F_41CD_E7281C08A967.jpg",
 "verticalAlign": "bottom",
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 1000,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Image40635"
 },
 "propagateClick": false,
 "class": "Image",
 "borderRadius": 0,
 "paddingLeft": 0,
 "maxWidth": 2000
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "shadow": false,
 "id": "Container_1752EAC5_57D1_805F_41D2_28E2DB3AFCF5",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 0,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "paddingBottom": 0,
 "height": "5%",
 "gap": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "scrollBarWidth": 10,
 "shadow": false,
 "children": [
  "this.HTMLText_1752BAC5_57D1_805F_41C3_4D3FE0C946A5",
  "this.Container_1752AAC5_57D1_805F_41C3_F3A70F1424E8"
 ],
 "id": "Container_1752DAC5_57D1_805F_41D3_AAEEE721B441",
 "minWidth": 100,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 520,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 30,
 "height": "100%",
 "gap": 10,
 "data": {
  "name": "Container text"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "shadow": false,
 "id": "Container_17517AC5_57D1_805F_41B5_79DEF98B730F",
 "scrollBarColor": "#000000",
 "width": 370,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 40,
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "shadow": false,
 "id": "HTMLText_6ECE2198_4F7D_CE0F_41C1_6D512C0D0B76",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 10,
 "height": "100%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.49vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin. </SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.66vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.82vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 },
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0
 ],
 "shadow": false,
 "data": {
  "name": "Button"
 },
 "pressedBackgroundOpacity": 1,
 "id": "Button_6ECE1198_4F7D_CE0F_41D1_D607B97BA20A",
 "width": 180,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 50,
 "minHeight": 1,
 "mode": "push",
 "fontSize": "2.39vh",
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.7,
 "iconBeforeLabel": true,
 "paddingTop": 0,
 "label": "LOREM IPSUM",
 "paddingBottom": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "gap": 5,
 "fontStyle": "italic",
 "iconWidth": 32,
 "shadowSpread": 1,
 "propagateClick": false,
 "class": "Button",
 "borderRadius": 50,
 "paddingLeft": 0,
 "cursor": "hand",
 "fontWeight": "bold"
},
{
 "shadow": false,
 "id": "HTMLText_1752BAC5_57D1_805F_41C3_4D3FE0C946A5",
 "minWidth": 1,
 "scrollBarOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "height": "46%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 0
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "shadow": false,
 "children": [
  "this.Image_17529AC5_57D1_805F_41BD_C64BF1F259C6",
  "this.HTMLText_17528AC5_57D1_805F_41CC_502F9EE91657"
 ],
 "id": "Container_1752AAC5_57D1_805F_41C3_F3A70F1424E8",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "75%",
 "gap": 10,
 "data": {
  "name": "- content"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "shadow": false,
 "id": "Image_17529AC5_57D1_805F_41BD_C64BF1F259C6",
 "minWidth": 1,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "width": "25%",
 "url": "skin/Image_17529AC5_57D1_805F_41BD_C64BF1F259C6.jpg",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 200,
 "paddingTop": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 },
 "horizontalAlign": "left",
 "class": "Image",
 "borderRadius": 0,
 "paddingLeft": 0,
 "maxWidth": 200
},
{
 "shadow": false,
 "id": "HTMLText_17528AC5_57D1_805F_41CC_502F9EE91657",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "75%",
 "paddingRight": 10,
 "height": "100%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.49vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.66vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10
}],
 "scrollBarWidth": 10,
 "shadow": false,
 "children": [
  "this.MainViewer",
  "this.Container_691B6C80_7506_9D4B_41B4_89FD1E7BCC23",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821",
  "this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2",
  "this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C",
  "this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2",
  "this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08",
  "this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8"
 ],
 "id": "rootPlayer",
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "start": "this.playAudioList([this.audio_B45B32B1_A92C_DE5A_41DC_CA657BABABF4]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "layout": "absolute",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "existsKey": function(key){  return key in window; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "registerKey": function(key, value){  window[key] = value; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "defaultVRPointer": "laser",
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "downloadEnabled": false,
 "width": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "gap": 10,
 "mouseWheelEnabled": true,
 "data": {
  "name": "Player468"
 },
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "propagateClick": true,
 "class": "Player",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible"
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
