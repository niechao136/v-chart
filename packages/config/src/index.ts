import * as echarts from 'echarts/core'

//#region SeriesOption
import {
  BarSeriesOption,
  BoxplotSeriesOption,
  CandlestickSeriesOption,
  CustomSeriesOption,
  EffectScatterSeriesOption,
  FunnelSeriesOption,
  GaugeSeriesOption,
  GraphSeriesOption,
  HeatmapSeriesOption,
  LineSeriesOption,
  LinesSeriesOption,
  MapSeriesOption,
  ParallelSeriesOption,
  PictorialBarSeriesOption,
  PieSeriesOption,
  RadarSeriesOption,
  SankeySeriesOption,
  ScatterSeriesOption,
  SunburstSeriesOption,
  ThemeRiverSeriesOption,
  TreeSeriesOption,
  TreemapSeriesOption
} from 'echarts/charts'
//#endregion

//#region ComponentOption
import {
  AriaComponentOption,
  AxisPointerComponentOption,
  BrushComponentOption,
  CalendarComponentOption,
  DataZoomComponentOption,
  DatasetComponentOption,
  GeoComponentOption,
  GraphicComponentOption,
  GridComponentOption,
  LegendComponentOption,
  MarkAreaComponentOption,
  MarkLineComponentOption,
  MarkPointComponentOption,
  ParallelComponentOption,
  PolarComponentOption,
  RadarComponentOption,
  SingleAxisComponentOption,
  TimelineComponentOption,
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
  VisualMapComponentOption
} from 'echarts/components'
//#endregion

export type EOption = echarts.ComposeOption<
    //#region SeriesOption
    | BarSeriesOption
    | BoxplotSeriesOption
    | CandlestickSeriesOption
    | CustomSeriesOption
    | EffectScatterSeriesOption
    | FunnelSeriesOption
    | GaugeSeriesOption
    | GraphSeriesOption
    | HeatmapSeriesOption
    | LineSeriesOption
    | LinesSeriesOption
    | MapSeriesOption
    | ParallelSeriesOption
    | PictorialBarSeriesOption
    | PieSeriesOption
    | RadarSeriesOption
    | SankeySeriesOption
    | ScatterSeriesOption
    | SunburstSeriesOption
    | ThemeRiverSeriesOption
    | TreeSeriesOption
    | TreemapSeriesOption
    //#endregion
    //#region ComponentOption
    | AriaComponentOption
    | AxisPointerComponentOption
    | BrushComponentOption
    | CalendarComponentOption
    | DataZoomComponentOption
    | DatasetComponentOption
    | GeoComponentOption
    | GraphicComponentOption
    | GridComponentOption
    | LegendComponentOption
    | MarkAreaComponentOption
    | MarkLineComponentOption
    | MarkPointComponentOption
    | ParallelComponentOption
    | PolarComponentOption
    | RadarComponentOption
    | SingleAxisComponentOption
    | TimelineComponentOption
    | TitleComponentOption
    | ToolboxComponentOption
    | TooltipComponentOption
    | VisualMapComponentOption
    //#endregion
>

export type ERenderer = 'canvas' | 'svg'

export const useEcharts = (el: HTMLElement, option: EOption, renderer: ERenderer = 'canvas') => {
  const plugins = []

  //#region Renderer
  if (renderer === 'canvas') {
    const CanvasRenderer = async () => (await import('echarts/renderers')).CanvasRenderer
    plugins.push(CanvasRenderer)
  } else {
    const SVGRenderer = async () => (await import('echarts/renderers')).SVGRenderer
    plugins.push(SVGRenderer)
  }
  //#endregion

  //#region Series
  //#endregion

  echarts.use(plugins)

  return echarts.init(el)
}
