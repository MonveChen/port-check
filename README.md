# port-check
compare two versions

#### state

refer to https://github.com/juji/cookie-manager and fix some bug

#### Usage

```js
import { Ver, versionCompare, VersionIs } from 'port-check'

new Ver('1.2.7').isGreaterThan('1.0.2')
//true

new Ver('1.0.1').isEqualTo('1.2.7')
//false

new Ver('1.0.1').isLessThan('1.2.7')
//true

versionCompare('1.1', '1') === VersionIs.LessThan
// false
versionCompare('1.1', '1') === VersionIs.GreaterThan
// true
console.log(['1.1', '2', '1.0'].sort(versionCompare))
// 1.0, 1.1, 2

```
