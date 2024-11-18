import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import * as reactSpring from "@react-spring/three";

function Gradient() {
	return (
		<div
			style={{
				position: "absolute",
				inset: 0,
				zIndex: -100,
			}}
		>
			<ShaderGradientCanvas
				style={{
					position: "absolute",
					inset: 0,
					pointerEvents: "none",
					zIndex: 0,
				}}
			>
				<ShaderGradient
					type="waterPlane"
					uSpeed={0.125}
					uStrength={0.575}
					uDensity={2.725}
					color3="#ECDFCC"
					color2="#3C3D37"
					color1="#3C3D37"
					reflection={false}
					lightType="3d"
					brightness={1.125}
					grain="off"
					cDistance={2}
					cPolarAngle={120}
					enableTransition={false}
				/>
			</ShaderGradientCanvas>
			<div className="backdrop-blur-sm absolute top-0 left-0 bottom-0 right-0 z-[2]"></div>
		</div>
	);
}

export default Gradient;

// type MeshT = {
//   type?: 'plane' | 'sphere' | 'waterPlane'
//   animate?: 'on' | 'off'
//   uTime?: number
//   uSpeed?: number
//   uStrength?: number
//   uDensity?: number
//   uFrequency?: number
//   // renamed to Sprial on Framer & shadergradient.co
//   uAmplitude?: number
//   positionX?: number
//   positionY?: number
//   positionZ?: number
//   rotationX?: number
//   rotationY?: number
//   rotationZ?: number
//   color1?: string
//   color2?: string
//   color3?: string
//   reflection?: number
//   wireframe?: boolean
//   shader?: string
//   rotSpringOption?: any
//   posSpringOption?: any
// }

// type GradientT = MeshT & {
//   control?: 'query' | 'props'
//   isFigmaPlugin?: boolean
//   dampingFactor?: number

//   // View (camera) props
//   cAzimuthAngle?: number
//   cPolarAngle?: number
//   // for both plane and waterPlane type
//   cDistance?: number
//   // only for sphere type
//   cameraZoom?: number

//   // Effect props
//   lightType?: '3d' | 'env'
//   brightness?: number
//   envPreset?: 'city' | 'dawn' | 'lobby'
//   grain?: 'on' | 'off'
//   grainBlending?: number

//   // Tool props
//   zoomOut?: boolean
//   toggleAxis?: boolean
//   hoverState?: string

//   enableTransition?: boolean
// }