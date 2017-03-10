/*jshint esversion: 6 */

var keyMirror = require('key-mirror-nested');

module.exports  = keyMirror({
  ACTION_TYPES : {
      WORKSPACE_OPEN_NEW_WORKSPACE_DIALOG : null,
      WORKSPACE_CLOSE_NEW_WORKSPACE_DIALOG : null,
      WORKSPACE_SUBMIT_NEW_WORKSPACE_DIALOG : null,
      WORKSPACE_OPEN_INVITE_DIALOG : null,
      WORKSPACE_CLOSE_INVITE_DIALOG : null,
      WORKSPACE_SUBMIT_INVITE_DIALOG : null,
      WORKSPACE_DELETE_USER : null,
      WORKSPACE_OPEN_EDIT_WORKSPACE_DIALOG : null,
      WORKSPACE_CLOSE_EDIT_WORKSPACE_DIALOG : null,
      WORKSPACE_SUBMIT_EDIT_WORKSPACE_DIALOG : null,
      MAP_OPEN_NEW_MAP_DIALOG : null,
      MAP_CLOSE_NEW_MAP_DIALOG : null,
      MAP_CLOSE_SUBMIT_NEW_MAP_DIALOG : null,
      MAP_OPEN_EDIT_MAP_DIALOG : null,
      MAP_CLOSE_EDIT_MAP_DIALOG : null,
      MAP_CLOSE_SUBMIT_EDIT_MAP_DIALOG : null,
      MAP_OPEN_EDIT_NODE_DIALOG : null,
      MAP_CLOSE_EDIT_NODE_DIALOG : null,
      MAP_CLOSE_SUBMIT_EDIT_NODE_DIALOG : null,
      PALETTE_DRAG_STOPPED : null,
      MAP_CLOSE_SUBMIT_NEW_NODE_DIALOG : null,
      MAP_CLOSE_NEW_NODE_DIALOG : null,
      CANVAS_FOCUS_NODE : null,
      CANVAS_BLUR_NODES : null,
      CANVAS_NODE_DRAGGED : null,
      CANVAS_CONNECTION_CREATED : null,
      CANVAS_CONNECTION_DELETE : null,
      CANVAS_ACTION_CREATED : null,
      CANVAS_ACTION_UPDATED : null,
      CANVAS_ACTION_DELETED : null,
      CANVAS_ACTION_OPEN_EDIT_DIALOG : null,
      CANVAS_ACTION_CLOSE_EDIT_DIALOG : null,
      CANVAS_ACTION_SUBMIT_EDIT_DIALOG : null,
      CANVAS_REMOVE_NODE : null,
      WORKSPACE_ARCHIVE : null,
      MAP_ARCHIVE : null,
      MAP_REF_SUBMAP : null,
      MAP_SUBMAP : null,
      MAP_CLOSE_NEW_SUBMAP_DIALOG : null,
      SHOW_SUBMAP_DIALOG : null,
      SHOW_REFERENCES_SUBMAP : null,
      CLOSE_REFERENCES_SUBMAP : null,
      SHOW_REFERENCES : null,
      CLOSE_REFERENCES : null,
      CLOSE_NEW_GENERIC_COMMENT_DIALOG : null,
      UPDATE_GENERIC_COMMENT : null,
      DELETE_GENERIC_COMMENT : null,
      OPEN_EDIT_GENERIC_COMMENT_DIALOG : null,
      CLOSE_EDIT_GENERIC_COMMENT_DIALOG : null,
      SUBMIT_EDIT_GENERIC_COMMENT_DIALOG : null
  },
  USERNEED : null,
  EXTERNAL : null,
  INTERNAL : null,
  SUBMAP : null,
  GENERIC_COMMENT : null
});
