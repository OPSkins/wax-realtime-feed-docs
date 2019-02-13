WAX Realtime Feed API
============================================

# Description
WAX real time feed api application has the purpose of provide real time events related to case openings that happen on the WAX Blockchain.

## How to use it?

A socket.io server is accessible from `https://realtimefeed-api.wax.io`, you can use any socket.io client to connect to it and start consuming events.

## Example using javascript

Copy the files inside `example` folder and run the following commands

- `npm install`
- `node client.js`

This will connect to the server and log to the console `case-opened` events.

## Events

### Case opened

Subscribe your socket client to `case-opened` 

Event structure
```
{
  "userId": 678,
  "userName": "user 678",
  "userAvatar": "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/e6/e6a7c4314d1679c429aaf2ce110a1ace9eb7c591.jpg",
  "caseId": "1",
  "caseName": "Weapon Case 1",
  "caseOpeningSite": "http://some-unboxing-site.com/",
  "unboxingTimestamp": "2019-01-30 22:54:41",
  "casesOpenedToday": "678",
  "totalRewardedToday": "678",
  "item": {
    "id": "10953980",
    "name": "XM1014 | Poison Target",
    "price": 97,
    "rarity": "Restricted",
    "image": "https://files.opskins.media/file/vgo-img/item/xm1014-poison-target-battle-scarred-300.png"
  }
}
```
