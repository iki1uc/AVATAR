const VectorRun = {
  through_4u      : true,
  gpu_accel       : "declared",
  octacore_axes   : TOR.pool.octacore.axes,
  wormhole_route  : TOR.pool.octacore.routing,
  nc_binding      : TOR.pool.octacore.nc_link,
  output          : TOR.pool.onedrive.vector_archive,
  integrity       : "strict",
  safe_mode       : true
};
