import React from 'react'
import { NodeEditor } from "./components/flume/index";
//import { NodeEditor } from "./components/flume/src/index";
import flowPortAndNodeTypes from "./components/Nodes/flowPortAndNodeTypes.js"

const App = () => {
  var nodes = [{"x":-360,"y":-250,"type":"start","width":200,"connections":{"inputs":{},"outputs":{}},"inputData":{},"id":"8IJs8RNJFP"},{"x":700,"y":-250,"type":"export_default","width":200,"connections":{"inputs":{},"outputs":{}},"inputData":{},"id":"nxhnI9V4w9"}]

  return (
    <div style={{height: '90vh'}}>
      <NodeEditor
        nodes={nodes}
        portTypes={flowPortAndNodeTypes.portTypes}
        nodeTypes={flowPortAndNodeTypes.nodeTypes}      
      />
    </div>
  )
}

export default App;
