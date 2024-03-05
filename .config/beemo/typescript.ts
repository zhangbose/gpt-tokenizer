import { TypeScriptConfig } from '@beemo/driver-typescript'

const config: TypeScriptConfig & {
  compilerOptions: { verbatimModuleSyntax?: boolean }
} = {
  compilerOptions: {
    allowJs: true,
    module: 'nodenext',
    moduleResolution: 'nodenext',
    verbatimModuleSyntax: true,
  },
  include: ['src'],
}

export default config
