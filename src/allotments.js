import React from "react";
import { Button } from "antd";
import { MapContainer, TileLayer, Circle, CircleMarker, Popup, Polyline, Polygon, Rectangle } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './index.css';
import { Row, Col } from "react-flexbox-grid";
// import Dashchart from "./components/dashchart";

// const { Option } = Select;


//This file contains the data maange for the dashchart and the display of ui elements on the dashboard.
class Allotments extends React.Component {
    render () {

      const center = [50.29464, -4.95058]

      const polyline = [
        [51.505, -0.09],
        [51.51, -0.1],
        [51.51, -0.12],
      ]

      const multiPolygon = [
        [
          [50.29515013832135, -4.950677905209242],
          [50.295232385457076, -4.950672540791212],
          [50.2952478067792, -4.950840178854643],
          [50.295241809598956, -4.9510413445307595],
          [50.29514842483784, -4.951049391157804],
        ],
        [
          [50.2950336213023, -4.950786534674345],
          [50.295108157957664, -4.9507798291518075],
          [50.29512015235108, -4.950963560469328],
          [50.29512957651521, -4.951052073366819],
          [50.295040475252534, -4.951070848829923],
        ],
        [
          [50.29514499787065, -4.950771782524763],
          [50.295140714161285, -4.95066315305966],
          [50.29510644447266, -4.950464669592558],
          [50.295021626887085, -4.950470034010587],
          [50.29503276455848, -4.95077312362927],
        ],
        [
          [50.295156992254746, -4.950659129746137],
          [50.29512272257782, -4.950466010697065],
          [50.295211823686465, -4.950456622965513],
          [50.29522724501526, -4.950651083119093],
        ],
        [
          [50.29521782087048, -4.950444553024946],
          [50.29515613551316, -4.950445894129453],
          [50.295104730987575, -4.950181696541486],
          [50.29509273659026, -4.950083795912443],
          [50.29513643045157, -4.9500556327177865],
          [50.29519897257532, -4.950263503916441],
          [50.29523067197655, -4.950440529711424],
        ],
        [
          [50.295139857419365, -4.950449917442976],
          [50.29502334037517, -4.950452599651991],
          [50.29501477293418, -4.950213883049665],
          [50.29508588264762, -4.950183037645994],
        ],
        [
          [50.29501648642249, -4.950200472004591],
          [50.295086739390506, -4.950162921078382],
          [50.295047329201715, -4.94984910262364],
          [50.2950010650254, -4.9498692191912514],
        ],
      ]

      const polygon = [
        [51.515, -0.09],
        [51.52, -0.1],
        [51.52, -0.12],
      ]

      const multiPolyline = [
        [
          [51.51, -0.12],
          [51.51, -0.13],
          [51.53, -0.13],
        ],
        [
          [51.51, -0.05],
          [51.51, -0.07],
          [51.53, -0.07],
        ],
      ]

      const rectangle = [
        [51.49, -0.08],
        [51.5, -0.06],
      ]

      const fillBlueOptions = { fillColor: 'blue' }
      const blackOptions = { color: 'black' }
      const limeOptions = { color: 'lime' }
      const purpleOptions = { color: 'purple' }
      const redOptions = { color: 'red' }

      return(
        <>
          <Row>
          <Col xs>
          <Button type="primary">Primary Button</Button>
          </Col>
          </Row>
          <Row>
          <Col xs />
          <Col xs>
          <MapContainer style={{ height: 700, width: 800 }} center={center} zoom={26} zoomControl={false} scrollWheelZoom={false} dragging={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>
            <Popup>Popup in CircleMarker</Popup>
          </CircleMarker>
          <Polyline pathOptions={limeOptions} positions={polyline} />
          <Polyline pathOptions={limeOptions} positions={multiPolyline} />
          <Polygon pathOptions={purpleOptions} positions={polygon} />
          <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
          <Rectangle bounds={rectangle} pathOptions={blackOptions} />
        </MapContainer>
        </Col>
        <Col xs />
        </Row>
        </>
    )
    }
  }

export default Allotments;
