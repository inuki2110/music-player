import os
import json

music_dir = "music"
files = [
    f"{music_dir}/{f}" for f in os.listdir(music_dir)
    if f.endswith(".mp3")
]

with open("playlist.json", "w", encoding="utf-8") as f:
    json.dump(files, f, indent=2, ensure_ascii=False)

print(f"Đã tạo playlist.json với {len(files)} bài hát.")
