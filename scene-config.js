const sceneConfig = {
  "glow": {
    "enabled": false
  },
  "rings": {
    "enabled": true,
    "scale": 0.01,
    "ring1": {
      "position": {
        "x": -0.04,
        "y": 0.16,
        "z": 0
      },
      "rotation": {
        "x": -70.57301022351179,
        "y": -29.891412679595927,
        "z": 87.87045949599369
      }
    },
    "ring2": {
      "position": {
        "x": 0.04,
        "y": 0.14,
        "z": 0.046680787959997916
      },
      "rotation": {
        "x": 102.00578890306008,
        "y": -21.57896701069374,
        "z": 27.512865893409202
      }
    }
  },
  "text": {
    "enabled": true,
    "line1": {
      "content": "Сослан и Юнона",
      "position": {
        "x": 1.0842021724855044e-18,
        "y": 0.04468785102580303,
        "z": 0.05921737725261407
      }
    },
    "line2": {
      "content": "16 лет вместе",
      "position": {
        "x": 5.204170427930421e-18,
        "y": -0.019944022954329028,
        "z": 0.05000000000000056
      }
    }
  },
  "photos": {
    "enabled": true,
    "borderThickness": 0.01,
    "items": [
      {
        "file": "assets/photo1.jpg",
        "backFile": "assets/photo_back1.jpg",
        "position": {
          "x": -0.25,
          "y": 0.2,
          "z": -0.1
        },
        "rotation": {
          "x": 0,
          "y": 30,
          "z": 0
        }
      },
      {
        "file": "assets/photo2.jpg",
        "backFile": "assets/photo_back2.jpg",
        "position": {
          "x": 0.2780761658399496,
          "y": 0.18899460866543458,
          "z": -0.14999999999999067
        },
        "rotation": {
          "x": -1.5345902054275191,
          "y": -29.996030724312636,
          "z": -0.3422196154560998
        }
      },
      {
        "file": "assets/photo3.jpg",
        "backFile": "assets/photo_back3.jpg",
        "position": {
          "x": -0.25525150192767615,
          "y": 0.05108505081474497,
          "z": 0.20000000000000034
        },
        "rotation": {
          "x": 0,
          "y": 20,
          "z": 0
        }
      },
      {
        "file": "assets/photo4.jpg",
        "backFile": "assets/photo_back4.jpg",
        "position": {
          "x": 0.40554395081650885,
          "y": 0.02,
          "z": 0.15
        },
        "rotation": {
          "x": 0,
          "y": -11.492205879156458,
          "z": 0
        }
      }
    ]
  },
  "flowers": {
    "enabled": false,
    "items": [
      {
        "position": {
          "x": 0,
          "y": 0.25,
          "z": 0
        },
        "color": "#ffffff",
        "rotation": {
          "x": 0,
          "y": 0,
          "z": 0
        }
      },
      {
        "position": {
          "x": 0.15,
          "y": 0.1,
          "z": 0.1
        },
        "color": "#ffc0cb",
        "rotation": {
          "x": 0,
          "y": 0,
          "z": 0
        }
      },
      {
        "position": {
          "x": -0.15,
          "y": 0.1,
          "z": -0.1
        },
        "color": "#ffffff",
        "rotation": {
          "x": 0,
          "y": 0,
          "z": 0
        }
      }
    ]
  },
  "particles": {
    "enabled": true,
    "count": 80
  },
  "hearts": {
    "enabled": false,
    "count": 20,
    "scale": 0.0002
  },
  "musical_key": {
    "enabled": true,
    "scale": 0.3,
    "position": {
      "x": 0,
      "y": 0.4,
      "z": -0.3
    },
    "rotation": {
      "x": 0,
      "y": 0,
      "z": 0
    },
    "animation": {
      "enabled": true,
      "speed": 0.2
    }
  },
  "video_player": {
    "enabled": true,
    "width": 0.3,
    "position": { "x": 1, "y": 0.1, "z": -0.2 },
    "rotation": { "x": 0, "y": -90, "z": 0 },
    "video_file": "assets/video1.mp4",
    "borderThickness": 0.015
  },
  "intro_animation": {
    "enabled": true,
    "duration": 2.5,
    "photo_effect": {
      "enabled": true,
      "effect": "scale_fade",
      "stagger": 200
    },
    "video_effect": {
      "enabled": true,
      "effect": "fade",
      "delay": 10000
    }
  }
};
