"use client";
<<<<<<< HEAD
import { useState } from "react";

const teams = [
  { name: "India", code: "IND", flag: "🇮🇳", ranking: 1, points: 121, color: "from-blue-600 to-orange-500" },
  { name: "Australia", code: "AUS", flag: "🇦🇺", ranking: 2, points: 118, color: "from-yellow-500 to-green-600" },
  { name: "England", code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", ranking: 3, points: 112, color: "from-blue-700 to-red-600" },
  { name: "South Africa", code: "SA", flag: "🇿🇦", ranking: 4, points: 108, color: "from-green-600 to-yellow-500" },
  { name: "New Zealand", code: "NZ", flag: "🇳🇿", ranking: 5, points: 104, color: "from-black to-white" },
  { name: "Pakistan", code: "PAK", flag: "🇵🇰", ranking: 6, points: 98, color: "from-green-700 to-white" },
  { name: "West Indies", code: "WI", flag: "🏏", ranking: 7, points: 89, color: "from-red-700 to-yellow-500" },
  { name: "Sri Lanka", code: "SL", flag: "🇱🇰", ranking: 8, points: 85, color: "from-blue-800 to-yellow-400" },
];

const liveMatches = [
  {
    id: 1,
    status: "LIVE",
    format: "T20I",
    tournament: "ICC World Cup 2026",
    team1: { name: "India", code: "IND", flag: "🇮🇳", score: "186/4", overs: "18.3" },
    team2: { name: "Australia", code: "AUS", flag: "🇦🇺", score: "142/3", overs: "14.2" },
    batting: "AUS",
    note: "Australia need 45 runs off 34 balls",
    crr: "9.93",
    rrr: "7.94",
    venue: "MCG, Melbourne",
    batsmen: [
      { name: "Steve Smith", runs: 67, balls: 45, fours: 6, sixes: 2, sr: "148.9" },
      { name: "Glenn Maxwell", runs: 34, balls: 18, fours: 2, sixes: 3, sr: "188.9" },
    ],
    bowlers: [
      { name: "Jasprit Bumrah", overs: "3.2", runs: 24, wickets: 2, econ: "7.20" },
      { name: "Mohammed Siraj", overs: "3.0", runs: 31, wickets: 1, econ: "10.33" },
    ],
  },
  {
    id: 2,
    status: "LIVE",
    format: "ODI",
    tournament: "Champions Trophy 2026",
    team1: { name: "England", code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: "287/6", overs: "50.0" },
    team2: { name: "South Africa", code: "SA", flag: "🇿🇦", score: "201/5", overs: "35.4" },
    batting: "SA",
    note: "South Africa need 87 runs off 86 balls",
    crr: "5.64",
    rrr: "6.07",
    venue: "Lord's, London",
    batsmen: [
      { name: "Temba Bavuma", runs: 78, balls: 92, fours: 7, sixes: 1, sr: "84.8" },
      { name: "David Miller", runs: 45, balls: 38, fours: 3, sixes: 2, sr: "118.4" },
    ],
    bowlers: [
      { name: "Joe Root", overs: "8.4", runs: 42, wickets: 2, econ: "4.85" },
      { name: "Mark Wood", overs: "7.0", runs: 51, wickets: 1, econ: "7.29" },
    ],
  },
];

const recentResults = [
  {
    id: 1,
    format: "T20I",
    tournament: "ICC World Cup 2026",
    team1: { name: "Pakistan", flag: "🇵🇰", score: "167/8", overs: "20" },
    team2: { name: "New Zealand", flag: "🇳🇿", score: "171/4", overs: "19.2" },
    result: "New Zealand won by 6 wickets",
    date: "Mar 16, 2026",
    venue: "Eden Park, Auckland",
    mom: "Kane Williamson (72* off 48)",
  },
  {
    id: 2,
    format: "Test",
    tournament: "Border-Gavaskar Trophy",
    team1: { name: "India", flag: "🇮🇳", score: "421 & 198/4", overs: "" },
    team2: { name: "Australia", flag: "🇦🇺", score: "389", overs: "" },
    result: "India won by 6 wickets",
    date: "Mar 14, 2026",
    venue: "SCG, Sydney",
    mom: "Yashasvi Jaiswal (134 & 67*)",
  },
  {
    id: 3,
    format: "ODI",
    tournament: "Champions Trophy 2026",
    team1: { name: "West Indies", flag: "🏏", score: "245/9", overs: "50" },
    team2: { name: "Sri Lanka", flag: "🇱🇰", score: "248/6", overs: "48.3" },
    result: "Sri Lanka won by 4 wickets",
    date: "Mar 13, 2026",
    venue: "R.Premadasa, Colombo",
    mom: "Kusal Mendis (89 off 97)",
  },
  {
    id: 4,
    format: "T20I",
    tournament: "ICC World Cup 2026",
    team1: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: "198/4", overs: "20" },
    team2: { name: "South Africa", flag: "🇿🇦", score: "189/7", overs: "20" },
    result: "England won by 9 runs",
    date: "Mar 12, 2026",
    venue: "Edgbaston, Birmingham",
    mom: "Jos Buttler (87 off 52)",
  },
];

const schedule = [
  { id: 1, format: "T20I", tournament: "ICC World Cup 2026", team1: { name: "India", flag: "🇮🇳" }, team2: { name: "Pakistan", flag: "🇵🇰" }, date: "Mar 19, 2026", time: "2:00 PM AEDT", venue: "Narendra Modi Stadium, Ahmedabad" },
  { id: 2, format: "ODI", tournament: "Champions Trophy 2026", team1: { name: "Australia", flag: "🇦🇺" }, team2: { name: "New Zealand", flag: "🇳🇿" }, date: "Mar 20, 2026", time: "10:00 AM AEDT", venue: "SCG, Sydney" },
  { id: 3, format: "Test", tournament: "Border-Gavaskar Trophy", team1: { name: "India", flag: "🇮🇳" }, team2: { name: "Australia", flag: "🇦🇺" }, date: "Mar 22, 2026", time: "11:00 AM AEDT", venue: "MCG, Melbourne" },
  { id: 4, format: "T20I", tournament: "ICC World Cup 2026", team1: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, team2: { name: "West Indies", flag: "🏏" }, date: "Mar 23, 2026", time: "6:00 PM AEDT", venue: "Lord's, London" },
  { id: 5, format: "ODI", tournament: "Champions Trophy 2026", team1: { name: "Sri Lanka", flag: "🇱🇰" }, team2: { name: "Pakistan", flag: "🇵🇰" }, date: "Mar 24, 2026", time: "3:00 PM AEDT", venue: "R.Premadasa, Colombo" },
];

const players = [
  { name: "Virat Kohli", country: "India", flag: "🇮🇳", role: "Batsman", format: "ODI", rank: 1, rating: 890, runs: 13848, avg: 58.18, hundreds: 50, fifties: 72, image: "VK" },
  { name: "Steve Smith", country: "Australia", flag: "🇦🇺", role: "Batsman", format: "Test", rank: 1, rating: 911, runs: 9532, avg: 59.55, hundreds: 32, fifties: 38, image: "SS" },
  { name: "Jasprit Bumrah", country: "India", flag: "🇮🇳", role: "Bowler", format: "T20I", rank: 1, rating: 867, wickets: 89, avg: 18.42, economy: 6.24, fiveWickets: 0, image: "JB" },
  { name: "Kane Williamson", country: "New Zealand", flag: "🇳🇿", role: "Batsman", format: "Test", rank: 2, rating: 878, runs: 8971, avg: 54.98, hundreds: 31, fifties: 47, image: "KW" },
  { name: "Babar Azam", country: "Pakistan", flag: "🇵🇰", role: "Batsman", format: "T20I", rank: 2, rating: 834, runs: 4021, avg: 45.12, hundreds: 3, fifties: 38, image: "BA" },
  { name: "Pat Cummins", country: "Australia", flag: "🇦🇺", role: "Bowler", format: "Test", rank: 1, rating: 908, wickets: 267, avg: 21.34, economy: 2.98, fiveWickets: 8, image: "PC" },
];

type Tab = "live" | "results" | "schedule" | "standings" | "players";

export default function Home() {
  const [tab, setTab] = useState<Tab>("live");
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<"All" | "Test" | "ODI" | "T20I">("All");

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "live", label: "Live", icon: "🔴" },
    { id: "results", label: "Results", icon: "✅" },
    { id: "schedule", label: "Schedule", icon: "📅" },
    { id: "standings", label: "Rankings", icon: "🏆" },
    { id: "players", label: "Players", icon: "⭐" },
  ];

  const formatColors: Record<string, string> = {
    T20I: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    ODI: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Test: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-900 rounded-full filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900 rounded-full filter blur-3xl opacity-10 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 pb-24">

        {/* Header */}
        <div className="pt-8 pb-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-4xl">🏏</span>
            <h1 className="text-4xl font-black bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              CricketHub
            </h1>
          </div>
          <p className="text-gray-400 text-sm">Live Scores · Results · Rankings · Stats</p>
        </div>

        {/* LIVE TAB */}
        {tab === "live" && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <h2 className="font-bold text-lg">Live Matches</h2>
              <span className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full border border-red-500/30">{liveMatches.length} LIVE</span>
            </div>

            {selectedMatch !== null ? (
              // Match Detail View
              <div>
                <button onClick={() => setSelectedMatch(null)} className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors">
                  ← Back to matches
                </button>
                {(() => {
                  const match = liveMatches.find(m => m.id === selectedMatch)!;
                  return (
                    <div>
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-5 mb-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className={`text-xs px-2 py-1 rounded-full border ${formatColors[match.format]}`}>{match.format}</span>
                          <span className="text-xs text-gray-400">{match.tournament}</span>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            <span className="text-red-400 text-xs font-bold">LIVE</span>
                          </div>
                        </div>

                        <div className="space-y-3 mb-4">
                          {[match.team1, match.team2].map((team) => (
                            <div key={team.code} className={`flex justify-between items-center p-3 rounded-2xl ${match.batting === team.code ? "bg-green-900/20 border border-green-700/30" : "bg-gray-800/50"}`}>
                              <div className="flex items-center gap-3">
                                <span className="text-2xl">{team.flag}</span>
                                <div>
                                  <p className="font-bold">{team.name}</p>
                                  {match.batting === team.code && <p className="text-green-400 text-xs">Batting</p>}
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-2xl font-black">{team.score}</p>
                                <p className="text-gray-400 text-sm">{team.overs} ov</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-2xl p-3 mb-4">
                          <p className="text-yellow-400 text-sm font-semibold text-center">{match.note}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gray-800 rounded-2xl p-3 text-center">
                            <p className="text-2xl font-black text-green-400">{match.crr}</p>
                            <p className="text-gray-500 text-xs">Current RR</p>
                          </div>
                          <div className="bg-gray-800 rounded-2xl p-3 text-center">
                            <p className="text-2xl font-black text-orange-400">{match.rrr}</p>
                            <p className="text-gray-500 text-xs">Required RR</p>
                          </div>
                        </div>
                      </div>

                      {/* Batsmen */}
                      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 mb-4">
                        <h3 className="font-bold text-green-400 mb-3">🏏 Batting</h3>
                        <div className="grid grid-cols-6 text-xs text-gray-500 mb-2">
                          <span className="col-span-2">Batsman</span>
                          <span className="text-center">R</span>
                          <span className="text-center">B</span>
                          <span className="text-center">4s/6s</span>
                          <span className="text-center">SR</span>
                        </div>
                        {match.batsmen.map((b) => (
                          <div key={b.name} className="grid grid-cols-6 py-2 border-t border-gray-800 text-sm">
                            <span className="col-span-2 font-semibold truncate">{b.name}</span>
                            <span className="text-center font-bold text-white">{b.runs}</span>
                            <span className="text-center text-gray-400">{b.balls}</span>
                            <span className="text-center text-gray-400">{b.fours}/{b.sixes}</span>
                            <span className="text-center text-blue-400">{b.sr}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bowlers */}
                      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 mb-4">
                        <h3 className="font-bold text-purple-400 mb-3">🎯 Bowling</h3>
                        <div className="grid grid-cols-5 text-xs text-gray-500 mb-2">
                          <span className="col-span-2">Bowler</span>
                          <span className="text-center">O</span>
                          <span className="text-center">R</span>
                          <span className="text-center">W</span>
                        </div>
                        {match.bowlers.map((b) => (
                          <div key={b.name} className="grid grid-cols-5 py-2 border-t border-gray-800 text-sm">
                            <span className="col-span-2 font-semibold truncate">{b.name}</span>
                            <span className="text-center text-gray-400">{b.overs}</span>
                            <span className="text-center">{b.runs}</span>
                            <span className="text-center font-bold text-red-400">{b.wickets}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-center text-gray-600 text-xs">📍 {match.venue}</p>
                    </div>
                  );
                })()}
              </div>
            ) : (
              // Match List View
              <div className="space-y-4">
                {liveMatches.map((match) => (
                  <div key={match.id} onClick={() => setSelectedMatch(match.id)}
                    className="bg-gray-900 border border-gray-800 hover:border-green-700 rounded-3xl p-5 cursor-pointer transition-all hover:scale-[1.02]">
                    <div className="flex justify-between items-center mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full border ${formatColors[match.format]}`}>{match.format}</span>
                      <span className="text-xs text-gray-400 truncate mx-2">{match.tournament}</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-red-400 text-xs font-bold">LIVE</span>
                      </div>
                    </div>
                    <div className="space-y-2 mb-3">
                      {[match.team1, match.team2].map((team) => (
                        <div key={team.code} className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{team.flag}</span>
                            <span className={`font-semibold ${match.batting === team.code ? "text-white" : "text-gray-400"}`}>{team.name}</span>
                            {match.batting === team.code && <span className="text-green-400 text-xs">●</span>}
                          </div>
                          <div className="text-right">
                            <span className={`font-black text-lg ${match.batting === team.code ? "text-white" : "text-gray-400"}`}>{team.score}</span>
                            <span className="text-gray-500 text-xs ml-1">({team.overs})</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-yellow-900/20 border border-yellow-700/20 rounded-xl p-2">
                      <p className="text-yellow-400 text-xs text-center">{match.note}</p>
                    </div>
                    <p className="text-gray-600 text-xs text-center mt-2">📍 {match.venue} · Tap for details</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* RESULTS TAB */}
        {tab === "results" && (
          <div>
            <h2 className="font-bold text-lg mb-4">✅ Recent Results</h2>
            <div className="space-y-4">
              {recentResults.map((match) => (
                <div key={match.id} className="bg-gray-900 border border-gray-800 rounded-3xl p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full border ${formatColors[match.format]}`}>{match.format}</span>
                    <span className="text-xs text-gray-400">{match.date}</span>
                  </div>
                  <div className="space-y-2 mb-3">
                    {[match.team1, match.team2].map((team) => (
                      <div key={team.name} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{team.flag}</span>
                          <span className="font-semibold">{team.name}</span>
                        </div>
                        <span className="font-black text-lg">{team.score}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-green-900/20 border border-green-700/20 rounded-xl p-2 mb-2">
                    <p className="text-green-400 text-xs text-center font-semibold">{match.result}</p>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>⭐ MOM: {match.mom}</span>
                    <span>📍 {match.venue}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCHEDULE TAB */}
        {tab === "schedule" && (
          <div>
            <h2 className="font-bold text-lg mb-4">📅 Upcoming Matches</h2>
            <div className="space-y-4">
              {schedule.map((match) => (
                <div key={match.id} className="bg-gray-900 border border-gray-800 rounded-3xl p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full border ${formatColors[match.format]}`}>{match.format}</span>
                    <span className="text-xs text-gray-400">{match.tournament}</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{match.team1.flag}</span>
                      <span className="font-bold">{match.team1.name}</span>
                    </div>
                    <div className="text-center">
                      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm font-bold text-gray-300">VS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{match.team2.name}</span>
                      <span className="text-3xl">{match.team2.flag}</span>
                    </div>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-700/20 rounded-xl p-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-blue-400">📅 {match.date}</span>
                      <span className="text-blue-400">🕐 {match.time}</span>
                    </div>
                    <p className="text-gray-400 text-xs text-center mt-1">📍 {match.venue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STANDINGS TAB */}
        {tab === "standings" && (
          <div>
            <h2 className="font-bold text-lg mb-4">🏆 ICC Team Rankings</h2>
            <div className="flex gap-2 mb-4 overflow-x-auto">
              {(["All", "Test", "ODI", "T20I"] as const).map((f) => (
                <button key={f} onClick={() => setSelectedFormat(f)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${selectedFormat === f ? "bg-green-500 text-white" : "bg-gray-900 text-gray-400 hover:bg-gray-800"}`}>
                  {f}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              {teams.map((team, i) => (
                <div key={team.code} className={`bg-gray-900 border rounded-2xl p-4 flex items-center gap-4 transition-all hover:scale-[1.02] ${i === 0 ? "border-yellow-500/50 bg-yellow-900/10" : i === 1 ? "border-gray-400/50 bg-gray-800/30" : i === 2 ? "border-orange-500/50 bg-orange-900/10" : "border-gray-800"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-lg ${i === 0 ? "bg-yellow-500 text-black" : i === 1 ? "bg-gray-400 text-black" : i === 2 ? "bg-orange-500 text-black" : "bg-gray-800 text-gray-400"}`}>
                    {team.ranking}
                  </div>
                  <span className="text-3xl">{team.flag}</span>
                  <div className="flex-1">
                    <p className="font-bold">{team.name}</p>
                    <p className="text-gray-400 text-xs">{team.code}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-xl text-green-400">{team.points}</p>
                    <p className="text-gray-500 text-xs">Rating</p>
                  </div>
                  <div className="w-16">
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${team.color} rounded-full`}
                        style={{ width: `${(team.points / 125) * 100}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PLAYERS TAB */}
        {tab === "players" && (
          <div>
            <h2 className="font-bold text-lg mb-4">⭐ Top Players</h2>
            <div className="space-y-4">
              {players.map((player) => (
                <div key={player.name} className="bg-gray-900 border border-gray-800 rounded-3xl p-5 hover:border-gray-600 transition-all hover:scale-[1.02]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center font-black text-lg`}>
                      {player.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-black text-lg">{player.name}</p>
                        <span className="text-lg">{player.flag}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{player.country} · {player.role}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded-full border ${formatColors[player.format]}`}>{player.format}</span>
                      <p className="text-yellow-400 font-bold mt-1">#{player.rank} Ranked</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {player.role === "Batsman" ? (
                      <>
                        <div className="bg-gray-800 rounded-xl p-2 text-center">
                          <p className="font-black text-green-400">{player.runs.toLocaleString()}</p>
                          <p className="text-gray-500 text-xs">Runs</p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-2 text-center">
                          <p className="font-black text-blue-400">{player.avg}</p>
                          <p className="text-gray-500 text-xs">Avg</p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-2 text-center">
                          <p className="font-black text-yellow-400">{player.hundreds}</p>
                          <p className="text-gray-500 text-xs">100s</p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-2 text-center">
                          <p className="font-black text-purple-400">{player.fifties}</p>
                          <p className="text-gray-500 text-xs">50s</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-gray-800 rounded-xl p-2 text-center">
                          <p className="font-black text-red-400">{player.wickets}</p>
                          <p className="text-gray-500 text-xs">Wickets</p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-2 text-center">
                          <p className="font-black text-blue-400">{player.avg}</p>
                          <p className="text-gray-500 text-xs">Avg</p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-2 text-center">
                          <p className="font-black text-yellow-400">{player.economy}</p>
                          <p className="text-gray-500 text-xs">Econ</p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-2 text-center">
                          <p className="font-black text-purple-400">{player.fiveWickets}</p>
                          <p className="text-gray-500 text-xs">5W</p>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>ICC Rating</span>
                      <span className="text-green-400 font-bold">{player.rating}</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full transition-all duration-700"
                        style={{ width: `${(player.rating / 1000) * 100}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-950/95 backdrop-blur border-t border-gray-800 z-50">
        <div className="max-w-2xl mx-auto px-4 py-2">
          <div className="flex justify-around">
            {tabs.map((t) => (
              <button key={t.id} onClick={() => { setTab(t.id); setSelectedMatch(null); }}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${tab === t.id ? "text-green-400" : "text-gray-500 hover:text-gray-300"}`}>
                <span className="text-xl">{t.icon}</span>
                <span className="text-xs font-semibold">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
=======
import { useState, useEffect } from "react";

const reasons = [
  "Your smile lights up every room you walk into ✨",
  "The way you laugh makes everything better 😊",
  "Your kindness and caring heart melts me every day 💝",
  "You make ordinary moments feel magical 🌟",
  "Your strength and courage inspire me every single day 💪",
  "The way you make me feel at home wherever we are 🏡",
  "Your beautiful eyes that I could get lost in forever 👀",
  "How you always know exactly what to say 💬",
  "The way you care for everyone around you 🤗",
  "Simply because you are you — and that's everything 💕",
];

const timeline = [
  { date: "The Day We Met", icon: "🌟", title: "The Beginning", description: "The universe conspired to bring two souls together. That day changed everything forever." },
  { date: "Our First Date", icon: "🌹", title: "First Date", description: "Nervous smiles, butterflies, and a feeling that this was something truly special." },
  { date: "When I Knew", icon: "💡", title: "I Knew You Were The One", description: "There was a moment — quiet and perfect — when I knew my heart belonged to you." },
  { date: "Our Adventures", icon: "✈️", title: "Adventures Together", description: "Every journey is better with you by my side. You make every place feel like home." },
  { date: "Hard Times", icon: "🤝", title: "Through It All", description: "We faced storms together and came out stronger. That's when I knew this love was real." },
  { date: "Today & Forever", icon: "♾️", title: "Forever Yours", description: "Every day with you is a gift. I choose you today, tomorrow, and always." },
];

const floatingHearts = ["💕", "🌹", "💗", "✨", "💝", "🌸", "💖", "⭐"];

export default function Home() {
  const [currentSection, setCurrentSection] = useState<"intro" | "letter" | "reasons" | "timeline">("intro");
  const [revealedReasons, setRevealedReasons] = useState<number[]>([]);
  const [hearts, setHearts] = useState<{ id: number; x: number; emoji: string; duration: number; delay: number }[]>([]);
  const [letterVisible, setLetterVisible] = useState(false);
  const [timelineStep, setTimelineStep] = useState(0);
  const [petals, setPetals] = useState<{ id: number; x: number; duration: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      emoji: floatingHearts[Math.floor(Math.random() * floatingHearts.length)],
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 5,
    }));
    setHearts(newHearts);

    const newPetals = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 8,
      size: 10 + Math.random() * 16,
    }));
    setPetals(newPetals);
  }, []);

  useEffect(() => {
    if (currentSection === "letter") {
      setTimeout(() => setLetterVisible(true), 300);
    }
    if (currentSection === "timeline") {
      setTimelineStep(0);
      timeline.forEach((_, i) => {
        setTimeout(() => setTimelineStep(i + 1), i * 600);
      });
    }
  }, [currentSection]);

  function revealReason(index: number) {
    if (!revealedReasons.includes(index)) {
      setRevealedReasons([...revealedReasons, index]);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 text-gray-800 overflow-hidden relative">

      {/* Falling Petals */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="absolute text-pink-300 animate-bounce opacity-40"
            style={{
              left: `${petal.x}%`,
              fontSize: `${petal.size}px`,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
              top: `${Math.random() * 100}%`,
            }}
          >
            🌸
          </div>
        ))}
      </div>

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute animate-pulse opacity-30"
            style={{
              left: `${heart.x}%`,
              top: `${Math.random() * 100}%`,
              fontSize: "20px",
              animationDuration: `${heart.duration}s`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            {heart.emoji}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8">

        {/* INTRO SECTION */}
        {currentSection === "intro" && (
          <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <div className="mb-8 animate-pulse">
              <span className="text-8xl">🌹</span>
            </div>
            <p className="text-pink-400 text-lg tracking-widest uppercase mb-4 font-semibold">
              A special place made just for
            </p>
            <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-rose-400 mb-4">
              Niru
            </h1>
            <p className="text-pink-300 text-2xl mb-2">💕</p>
            <p className="text-gray-500 text-lg max-w-sm mb-12 leading-relaxed">
              A little corner of the internet dedicated entirely to you and how much you mean to me.
            </p>

            {/* ✅ UPDATED — Niru's Profile Photo */}
            <div className="w-48 h-48 rounded-full border-4 border-pink-300 shadow-xl overflow-hidden mb-12 relative">
              <img src="/Niru.JPG" alt="Niru" className="w-full h-full object-cover" />
              <div className="absolute -top-2 -right-2 text-2xl animate-bounce">💕</div>
              <div className="absolute -bottom-2 -left-2 text-2xl animate-bounce">🌹</div>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full max-w-sm mb-12">
              {[
                { icon: "💌", label: "Love Letter" },
                { icon: "💝", label: "Reasons" },
                { icon: "📖", label: "Our Story" },
              ].map(({ icon, label }) => (
                <div key={label} className="bg-white/60 backdrop-blur rounded-2xl p-3 text-center border border-pink-200">
                  <span className="text-3xl block mb-1">{icon}</span>
                  <span className="text-pink-500 text-xs font-semibold">{label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setCurrentSection("letter")}
              className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-pink-300 hover:scale-105 transition-all animate-pulse"
            >
              Open with Love 💕
            </button>
          </div>
        )}

        {/* LOVE LETTER SECTION */}
        {currentSection === "letter" && (
          <div className="min-h-screen flex flex-col items-center justify-center py-12">
            <button onClick={() => setCurrentSection("intro")} className="self-start text-pink-400 hover:text-pink-600 mb-6 transition-colors">
              ← Back
            </button>

            <div className="text-center mb-8">
              <span className="text-5xl">💌</span>
              <h2 className="text-3xl font-black text-rose-500 mt-2">A Letter For You</h2>
            </div>

            <div className={`bg-white/80 backdrop-blur border border-pink-200 rounded-3xl p-8 shadow-xl transition-all duration-1000 ${letterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="relative">
                <div className="absolute inset-0 flex flex-col gap-8 pt-8">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="border-b border-pink-100 w-full" />
                  ))}
                </div>

                <div className="relative z-10 font-serif">
                  <p className="text-pink-400 text-sm mb-6 text-right">To my dearest Niru 🌹</p>

                  <p className="text-gray-700 leading-9 mb-6 text-lg">
                    There are moments in life that you know will stay with you forever — and meeting you was one of them.
                    From the very first time I saw you, something inside me just <span className="text-rose-500 font-semibold">knew</span>.
                  </p>

                  <p className="text-gray-700 leading-9 mb-6 text-lg">
                    You came into my life and quietly made everything better. Better mornings, better days,
                    better versions of myself. You have this beautiful way of making even the smallest moments
                    feel like <span className="text-rose-500 font-semibold">magic</span>.
                  </p>

                  <p className="text-gray-700 leading-9 mb-6 text-lg">
                    I love the way you laugh. I love the way you care. I love how you don't even realise
                    how absolutely <span className="text-rose-500 font-semibold">extraordinary</span> you are.
                    But I see it, Niru — I see all of it, every single day.
                  </p>

                  <p className="text-gray-700 leading-9 mb-6 text-lg">
                    This little website is my way of telling you that you are loved — deeply, completely,
                    and without condition. You deserve the whole world, and I promise to spend every day
                    trying to give it to you. 💕
                  </p>

                  <p className="text-gray-700 leading-9 mb-8 text-lg">
                    So here it is — a tiny corner of the internet, made just for you.
                    Because you deserve to know how <span className="text-rose-500 font-semibold">incredibly loved</span> you are.
                  </p>

                  <p className="text-rose-500 font-bold text-right text-lg">Forever yours 🌹</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setCurrentSection("reasons")}
              className="mt-8 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all"
            >
              See Why I Love You 💝
            </button>
          </div>
        )}

        {/* REASONS SECTION */}
        {currentSection === "reasons" && (
          <div className="py-12">
            <button onClick={() => setCurrentSection("letter")} className="text-pink-400 hover:text-pink-600 mb-6 transition-colors block">
              ← Back
            </button>

            <div className="text-center mb-10">
              <span className="text-5xl block mb-3">💝</span>
              <h2 className="text-3xl font-black text-rose-500 mb-2">
                10 Reasons I Love You
              </h2>
              <p className="text-pink-400">Tap each card to reveal ✨</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  onClick={() => revealReason(i)}
                  className={`rounded-3xl p-4 cursor-pointer transition-all duration-500 hover:scale-105 min-h-28 flex items-center justify-center text-center border-2 ${
                    revealedReasons.includes(i)
                      ? "bg-gradient-to-br from-rose-100 to-pink-100 border-pink-300 shadow-lg"
                      : "bg-white/60 border-pink-200 hover:border-pink-400"
                  }`}
                >
                  {revealedReasons.includes(i) ? (
                    <div>
                      <p className="text-pink-400 font-black text-2xl mb-2">#{i + 1}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{reason}</p>
                    </div>
                  ) : (
                    <div>
                      <span className="text-4xl block mb-2">💕</span>
                      <p className="text-pink-300 text-sm">Tap to reveal</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {revealedReasons.length === reasons.length && (
              <div className="bg-gradient-to-r from-rose-400 to-pink-500 rounded-3xl p-6 text-center text-white mb-6 animate-pulse">
                <span className="text-4xl block mb-2">🎉</span>
                <p className="font-black text-xl">And so many more reasons, Niru!</p>
                <p className="opacity-80 mt-1">You are loved more than words can say 💕</p>
              </div>
            )}

            <div className="text-center">
              <p className="text-pink-400 mb-2">{revealedReasons.length}/{reasons.length} revealed</p>
              <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-rose-400 to-pink-500 rounded-full transition-all duration-500"
                  style={{ width: `${(revealedReasons.length / reasons.length) * 100}%` }}
                />
              </div>
            </div>

            <button
              onClick={() => setCurrentSection("timeline")}
              className="mt-8 w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all"
            >
              Our Love Story 📖
            </button>
          </div>
        )}

        {/* TIMELINE SECTION */}
        {currentSection === "timeline" && (
          <div className="py-12">
            <button onClick={() => setCurrentSection("reasons")} className="text-pink-400 hover:text-pink-600 mb-6 transition-colors block">
              ← Back
            </button>

            <div className="text-center mb-10">
              <span className="text-5xl block mb-3">📖</span>
              <h2 className="text-3xl font-black text-rose-500 mb-2">Our Story</h2>
              <p className="text-pink-400">A love story worth telling 🌹</p>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-300 to-pink-200" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className={`flex gap-6 transition-all duration-700 ${timelineStep > i ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-xl shadow-lg border-4 border-white">
                        {item.icon}
                      </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur border border-pink-200 rounded-3xl p-5 flex-1 shadow-sm">
                      <p className="text-pink-400 text-xs font-semibold uppercase tracking-wider mb-1">{item.date}</p>
                      <h3 className="font-black text-lg text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Message */}
            <div className="mt-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-3xl p-8 text-white text-center shadow-xl">
              <span className="text-6xl block mb-4">💍</span>
              <h3 className="text-2xl font-black mb-3">To Niru, With All My Love</h3>
              <p className="leading-relaxed opacity-90 mb-4">
                Every chapter of this story has been beautiful because of you.
                And I can't wait to write every chapter that comes next — together. 💕
              </p>
              <p className="font-bold text-lg">Always & Forever 🌹</p>
            </div>

            {/* ✅ UPDATED — Memory Photos */}
            <div className="mt-8">
              <h3 className="text-center font-bold text-rose-500 mb-4">Our Memories 📸</h3>
              <div className="grid grid-cols-3 gap-3">
                {["photo1.JPG", "photo2.JPG", "photo3.PNG",
                  "photo4.PNG", "photo5.PNG", "photo6.JPG"].map((photo, i) => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden border-2 border-pink-200 shadow-sm">
                    <img
                      src={`/${photo}`}
                      alt={`Memory ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setCurrentSection("intro")}
              className="mt-8 w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all"
            >
              Back to Start 🌹
            </button>
          </div>
        )}
      </div>
>>>>>>> 9f2d3ad83c3f5005108d2bd3468d3c7dc21d0421
    </div>
  );
}