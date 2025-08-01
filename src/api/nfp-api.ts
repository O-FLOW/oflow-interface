import { AntEmptyProps } from '@/api/components/ant/ant-empty-props'
import MainPortalProps from '@/api/components/dev/main-portal-props'
import { MaterialSymbolProps } from '@/api/components/normal/material-symbol-props'
import ResourcePreviewProps from '@/api/components/normal/resource-preview-props'
import { UseBase } from '@/api/hook/use-base.type'
import { UseStepOptions } from '@/api/hook/use-step-options.type'
import { UseTStep } from '@/api/hook/use-t-step.type'
import RvLoopAttributeApi from '@/api/service/attributes/animation/loop/rv-loop-attribute-api'
import RvNativeAttributeApi from '@/api/service/attributes/animation/native/rv-native-attribute-api'
import RvCodeAttributeApi from '@/api/service/attributes/code/rv-code-attribute-api'
import RvLabelAttributeApi from '@/api/service/attributes/label/rv-label-attribute-api'
import RvLocationAttributeApi from '@/api/service/attributes/location/rv-location-attribute-api'
import RvMaterialAttributeApi from '@/api/service/attributes/material/rv-material-attribute-api'
import CameraConfigurationAnimationApi from '@/api/service/engine/animation/entry/environment/camera-configuration-animation-api'
import CameraLocationAnimationApi from '@/api/service/engine/animation/entry/environment/camera-location-animation-api'
import FogAnimationApi from '@/api/service/engine/animation/entry/environment/fog-animation-api'
import GroundAnimationApi from '@/api/service/engine/animation/entry/environment/ground-animation-api'
import LightAnimationApi from '@/api/service/engine/animation/entry/environment/light-animation-api'
import ShadowAnimationApi from '@/api/service/engine/animation/entry/environment/shadow-animation-api'
import SkyboxAnimationApi from '@/api/service/engine/animation/entry/environment/skybox-animation-api'
import EasyPropertyAnimationApi from '@/api/service/engine/animation/factory/between/easy-property-animation-api'
import RsLoopAnimationManagerApi from '@/api/service/engine/animation/factory/loop/rs-loop-animation-manager-api'
import RsAudioServiceApi from '@/api/service/engine/audio/rs-audio-service-api'
import RsSelectionServiceApi from '@/api/service/engine/operate/selection/rs-selection-service-api'
import RsClickApi from '@/api/service/engine/render/click/rs-click-api'
import RsEnvironmentApi from '@/api/service/engine/render/environment/rs-environment-api'
import RsEnvironmentServiceApi from '@/api/service/engine/render/environment/rs-environment-service-api'
import RsTransformGroundApi from '@/api/service/engine/render/environment/rs-transform-ground-api'
import RsLabelServiceApi from '@/api/service/engine/render/label/rs-label-service-api'
import RsNodeMaterialManagerApi from '@/api/service/engine/render/material/node/rs-node-material-manager-api'
import RsMaterialServiceApi from '@/api/service/engine/render/material/rs-material-service-api'
import RsSeparateServiceApi from '@/api/service/engine/render/material/separate/rs-separate-service-api'
import FirstLoadModelServiceApi from '@/api/service/engine/render/model/first/first-load-model-service-api'
import RsModelServiceApi from '@/api/service/engine/render/model/rs-model-service-api'
import RsServiceApi from '@/api/service/engine/rs-service-api'
import DialogServiceApi from '@/api/service/main/dialog/dialog-service-api'
import FirstLoadServiceApi from '@/api/service/main/file/first/first-load-service-api'
import OssUploadServiceApi from '@/api/service/main/file/oss/oss-upload-service-api'
import MessageServiceApi from '@/api/service/main/message/message-service-api'
import NativeEventServiceApi from '@/api/service/main/native-event/native-event-service-api'
import PluginContainerServiceApi from '@/api/service/main/plugin/plugin-container-service-api'
import ResourceServiceApi from '@/api/service/main/resource/resource-service-api'
import ThemeServiceApi from '@/api/service/main/theme/theme-service-api'
import RvFileServiceApi from '@/api/service/sync/file/rv-file-service-api'
import RvGlobalServiceApi from '@/api/service/sync/global/rv-global-service-api'
import RvAttributesServiceApi from '@/api/service/sync/step/attributes/rv-attributes-service-api'
import RvStepServiceApi from '@/api/service/sync/step/rv-step-service-api'
import TStepServiceApi from '@/api/service/target/step/t-step-service-api'
import { MaterialSymbolFunction } from '@/utils/material-symbol-utils'
import { SleepFunction } from '@/utils/sleep-utils'

import { AntCheckboxProps } from './components/ant/ant-checkbox-props'
import { AntColorProps } from './components/ant/ant-color-props'
import { AntNumberProps } from './components/ant/ant-number-props'
import { AntSelectProps } from './components/ant/ant-select-props'
import { AntSwitchProps } from './components/ant/ant-switch-props'
import ThemeProviderProps from './components/ant/theme-provider-props'
import { FlexGrowProps } from './components/dev/flex-grow-props'
import { SpanProps } from './components/interface/base-types'
import { AnchorProps } from './components/normal/anchor-props'
import { DialogProps } from './components/normal/dialog-props'
import { FileProgressBarProps } from './components/normal/file-progress-bar-props'
import { ProgressBarProps } from './components/normal/progress-bar-props'
import { ScrollBarProps } from './components/normal/scroll-bar-props'
import { UploadButtonAndListProps } from './components/normal/upload-button-and-list-props'
import { RsdButtonProps } from './components/rsd/rsd-button-props'
import { RsdCheckableButtonProps } from './components/rsd/rsd-checkable-button-props'
import { RsdCheckboxProps } from './components/rsd/rsd-checkbox-props'
import { RsdColorProps } from './components/rsd/rsd-color-props'
import { RsdFileSelectProps } from './components/rsd/rsd-file-select-props'
import { RsdInputProps } from './components/rsd/rsd-input-props'
import { RsdMentionsProps } from './components/rsd/rsd-mentions-props'
import { RsdNoneProps } from './components/rsd/rsd-none-props'
import { RsdNumberListProps } from './components/rsd/rsd-number-list-props'
import { RsdNumberProps } from './components/rsd/rsd-number-props'
import { RsdSelectProps } from './components/rsd/rsd-select-props'
import { RsdSwitchProps } from './components/rsd/rsd-switch-props'
import { RsdTitleProps } from './components/rsd/rsd-title-props'
import { UseTAttributes } from './hook/use-t-attributes.type'
import RsNodeServiceApi from './service/engine/render/model/rs-node-service-api'
import LocalDataServiceApi from './service/main/file/local/local-data-service-api'
import InternationalizationServiceApi from './service/main/internationalization/internationalization-service-api'
import MeetingServiceApi from './service/main/meeting/meeting-service-api'
import PluginServiceApi from './service/main/plugin/plugin-service-api'
import ModulePreloaderApi from './service/main/preloader/module-preloader-api'
import sceneServiceApi from './service/main/scene/scene-service-api'
import SpaceServiceApi from './service/main/space/space-service-api'
import StatusServiceApi from './service/main/status/status-service-api'
import UserServiceApi from './service/main/user/user-service-api'
import HistoryServiceApi from './service/sync/history-service-api'
import RvModelServiceApi from './service/sync/model/rv-model-service-api'
import RvResourceServiceApi from './service/sync/resource/rv-resource-service-api'
import SyncServiceApi from './service/sync/sync-service-api'
import TAttributesServiceApi from './service/target/attribute/t-attributes-service-api'

import type { FunctionComponent } from 'react'

export interface NfpApi {
  services: {
    attributes: {
      rvLocationAttribute: RvLocationAttributeApi
      rvLabelAttribute: RvLabelAttributeApi
      rvLoopAttribute: RvLoopAttributeApi
      rvNativeAttribute: RvNativeAttributeApi
      rvCodeAttribute: RvCodeAttributeApi
      rvMaterialAttribute: RvMaterialAttributeApi
    }

    main: {
      spaceService: SpaceServiceApi
      statusService: StatusServiceApi
      pluginService: PluginServiceApi
      themeService: ThemeServiceApi
      internationalizationService: InternationalizationServiceApi
      userService: UserServiceApi
      meetingService: MeetingServiceApi
      modulePreloader: ModulePreloaderApi
      messageService: MessageServiceApi
      localDataService: LocalDataServiceApi
      ossUploadService: OssUploadServiceApi
      resourceService: ResourceServiceApi
      firstLoadService: FirstLoadServiceApi
      dialogService: DialogServiceApi
      nativeEventService: NativeEventServiceApi
      firstLoadModelService: FirstLoadModelServiceApi
      pluginContainerService: PluginContainerServiceApi
      sceneService: sceneServiceApi
    }

    engine: {
      animation: {
        cameraConfigurationAnimation: CameraConfigurationAnimationApi
        cameraLocationAnimation: CameraLocationAnimationApi
        fogAnimation: FogAnimationApi
        groundAnimation: GroundAnimationApi
        lightAnimation: LightAnimationApi
        shadowAnimation: ShadowAnimationApi
        skyboxAnimation: SkyboxAnimationApi

        easyPropertyAnimation: EasyPropertyAnimationApi
        rsLoopAnimationManager: RsLoopAnimationManagerApi
      }

      audio: {
        rsAudioService: RsAudioServiceApi
      }

      operate: {
        rsSelectionService: RsSelectionServiceApi
      }

      render: {
        rsNodeService: RsNodeServiceApi
        rsModelService: RsModelServiceApi
        rsEnvironment: RsEnvironmentApi
        rsEnvironmentService: RsEnvironmentServiceApi
        rsTransformGround: RsTransformGroundApi
        rsClick: RsClickApi
        rsLabelService: RsLabelServiceApi
        rsNodeMaterialManager: RsNodeMaterialManagerApi
        rsMaterialService: RsMaterialServiceApi
        rsSeparateService: RsSeparateServiceApi
      }

      rsService: RsServiceApi
    }

    sync: {
      syncService: SyncServiceApi
      historyService: HistoryServiceApi
      rvGlobalService: RvGlobalServiceApi
      rvStepService: RvStepServiceApi
      rvFileService: RvFileServiceApi
      rvResourceService: RvResourceServiceApi
      rvModelService: RvModelServiceApi
      rvAttributesService: RvAttributesServiceApi
    }

    target: {
      tStepService: TStepServiceApi
      tAttributesService: TAttributesServiceApi
    }
  }

  hooks: {
    useBase: UseBase
    useTStep: UseTStep
    useTAttributes: UseTAttributes
    useStepOptions: UseStepOptions
  }

  components: {
    ant: {
      ThemeProvider: FunctionComponent<ThemeProviderProps>
      AntCheckbox: FunctionComponent<AntCheckboxProps>
      AntColor: FunctionComponent<AntColorProps>
      AntNumber: FunctionComponent<AntNumberProps>
      AntSelect: FunctionComponent<AntSelectProps<unknown>>
      AntSwitch: FunctionComponent<AntSwitchProps>
      AntEmpty: FunctionComponent<AntEmptyProps>
    }

    normal: {
      Anchor: FunctionComponent<AnchorProps>
      DrawerLoading: FunctionComponent<SpanProps>
      FileProgressBar: FunctionComponent<FileProgressBarProps>
      ProgressBar: FunctionComponent<ProgressBarProps>
      UploadButtonAndList: FunctionComponent<UploadButtonAndListProps>
      ScrollBar: FunctionComponent<ScrollBarProps>
      Dialog: FunctionComponent<DialogProps>
      MaterialSymbol: FunctionComponent<MaterialSymbolProps>
      ResourcePreview: FunctionComponent<ResourcePreviewProps>
    }

    rsd: {
      RsdButton: FunctionComponent<RsdButtonProps>
      RsdCheckableButton: FunctionComponent<RsdCheckableButtonProps>
      RsdCheckbox: FunctionComponent<RsdCheckboxProps>
      RsdColor: FunctionComponent<RsdColorProps>
      RsdSelect: FunctionComponent<RsdSelectProps>
      RsdFileSelect: FunctionComponent<RsdFileSelectProps>
      RsdFileSelectButton: FunctionComponent<RsdFileSelectProps>
      RsdInput: FunctionComponent<RsdInputProps>
      RsdMentions: FunctionComponent<RsdMentionsProps>
      RsdNone: FunctionComponent<RsdNoneProps>
      RsdNumber: FunctionComponent<RsdNumberProps>
      RsdNumberList: FunctionComponent<RsdNumberListProps>
      RsdSwitch: FunctionComponent<RsdSwitchProps>
      RsdTextarea: FunctionComponent<RsdInputProps>
      RsdTitle: FunctionComponent<RsdTitleProps>
    }

    dev: {
      FlexGrow: FunctionComponent<FlexGrowProps>
      MainPortal: FunctionComponent<MainPortalProps>
    }
  }

  styles: {
    rss: Record<string, string>
  }

  utils: {
    materialSymbol: MaterialSymbolFunction
    sleep: SleepFunction
  }
}
