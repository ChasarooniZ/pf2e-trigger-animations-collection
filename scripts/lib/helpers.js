export async function tokenCrosshairHelper(tokenDoc, name = "crosshair") {
  return await new Sequence()
    .crosshair(name)
    .distance((tokenDoc.width * canvas.grid.distance) / 2)
    .snapPosition(
      tokenDoc.width % 2
        ? CONST.GRID_SNAPPING_MODES.CENTER
        : CONST.GRID_SNAPPING_MODES.VERTEX,
    )
    .texture(tokenImage(tokenDoc), {
      scale: tokenScale(tokenDoc),
    })
    .play();
}

function tokenImage(tokenDoc) {
  return (
    (tokenDoc.ring.enabled && tokenDoc.ring.subject.texture) ||
    tokenDoc.texture.src
  );
}

function tokenScale(tokenDoc) {
  return tokenDoc.ring.enabled
    ? tokenDoc.texture.scaleX / tokenDoc.ring.subject.scale
    : tokenDoc.texture.scaleX;
}
