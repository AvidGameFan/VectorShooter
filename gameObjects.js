// Enemy types with different shapes, colors, and behaviors
const EnemyTypes = {
    DIAMOND: {
        name: 'Diamond',
        color: 'red',
        size: 15,
        speed: 2,
        points: 100,
        draw: (ctx, x, y, size) => {
            ctx.beginPath();
            ctx.strokeStyle = 'red';
            ctx.moveTo(x, y - size);
            ctx.lineTo(x + size, y);
            ctx.lineTo(x, y + size);
            ctx.lineTo(x - size, y);
            ctx.closePath();
            ctx.stroke();
        }
    },
    CIRCLE: {
        name: 'Circle',
        color: 'yellow',
        size: 12,
        speed: 3,
        points: 150,
        draw: (ctx, x, y, size) => {
            ctx.beginPath();
            ctx.strokeStyle = 'yellow';
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.stroke();
        }
    },
    SQUARE: {
        name: 'Square',
        color: 'blue',
        size: 18,
        speed: 1.5,
        points: 200,
        draw: (ctx, x, y, size) => {
            ctx.beginPath();
            ctx.strokeStyle = 'blue';
            ctx.rect(x - size, y - size, size * 2, size * 2);
            ctx.stroke();
        }
    }
};

// Level configurations
const Levels = [
    {
        enemyType: EnemyTypes.DIAMOND,
        enemiesToEliminate: 10,
        spawnRate: 0.02,
        description: "Level 1: Diamond Hunters"
    },
    {
        enemyType: EnemyTypes.CIRCLE,
        enemiesToEliminate: 15,
        spawnRate: 0.03,
        description: "Level 2: Circle Invasion"
    },
    {
        enemyType: EnemyTypes.SQUARE,
        enemiesToEliminate: 20,
        spawnRate: 0.04,
        description: "Level 3: Square Attack"
    }
];

// Player configuration
const PlayerConfig = {
    size: 20,
    speed: 5,
    bulletSpeed: 10,
    lives: 3,
    invulnerableTime: 2000
}; 