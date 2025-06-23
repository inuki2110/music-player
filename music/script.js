async function loadPlaylist() {
  try {
    const res = await fetch("playlist.json");
    const songs = await res.json();

    const playlist = document.getElementById("playlist");
    const player = document.getElementById("player");
    playlist.innerHTML = ''; // Xóa "Đang tải..."

    songs.forEach(song => {
      const li = document.createElement("li");
      li.textContent = decodeURIComponent(song.split("/").pop());
      li.onclick = () => {
        player.src = song;
        player.play();
      };
      playlist.appendChild(li);
    });

  } catch (err) {
    console.error("Không thể tải danh sách nhạc:", err);
    document.getElementById("playlist").innerHTML = "<li>Lỗi tải danh sách nhạc.</li>";
  }
}

loadPlaylist();
