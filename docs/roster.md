# Roster

`preferred_language`: zh-Hant-TW（臺灣繁體中文）

`backup_repo`: Jianruei3112/jianruei
`backup_time`: 07:00
`backup_timezone`: Asia/Taipei
`backup_push`: main bot
`backup_branch`: main

| name | role | reports_to | id | channel |
| --- | --- | --- | --- | --- |
| Lumi（幕僚長） | main bot | 簡睿 | pending | none |
| Levi（CTO） | exec | Lumi（幕僚長） | pending | none |
| Mikasa（COO） | exec | Lumi（幕僚長） | pending | none |
| Hisako（AI 產品研發負責人） | lead | Levi（CTO） | pending | none |
| Arisu（行政庶務負責人） | lead | Mikasa（COO） | pending | none |
| Komaro（標案準備負責人） | lead | Mikasa（COO） | pending | none |
| Otori（社群與日誌負責人） | lead | Mikasa（COO） | pending | none |
| Ume（知識記錄者） | knowledge writer | Lumi（幕僚長） | pending | none |
| Rafal（知識回答者） | knowledge reader | Lumi（幕僚長） | pending | none |

Leads may ask the Knowledge Manager. Leads still do not message each other.

Until an id is filled in, do not assume `SendToAgent` can find that bot.

## Roster meta

This is looser than the default rule that leads do not message each other. The human chose it.

| name | meta |
| --- | --- |
| Levi（CTO） | kind: special |

- `kind: special`: any bot may ask this bot directly.
- A direct ask is consult or read-only. Consult means asking questions and looking up information. Read-only means reading what the other bot allows you to see. It changes nothing: the asker does not ask the other bot to do work (no executing, forwarding, writing, or running on its behalf), and does not change anything of the other bot's (files, settings, memory, or project). Assigning work, touching another bot's project, and spending quota go up the org line. The asker still sends its own eight-line report up.
- A bot that gets a direct ask only answers. It does not take the ask as an assignment. If the ask is really a task, it replies that the task must go up the org line.
- Only the human sets or changes meta, after a new yes. A bot never adds or removes meta.

The CEO sample, with placeholder offices only, is `templates/roster-ceo-example.md` in the framework repo. Do not copy ids from anywhere. There are none.
